import sys
import os
import threading
import json
import yaml
import Levenshtein
import motion_functions
import helpers
from controller import Robot, Motor
from subscriber import Subscriber

# import supercontroller
'''
controller_path = os.path.join(os.getcwd(), os.pardir)
sys.path.insert(0, controller_path)
from super_controller import SuperController
'''

class RobotController(Robot):
    def __init__(self, config):

        # Resolver config file
        self.config = config

        # Instance variable instruction
        self.instruction = ''

        # Instance variable scheduled
        self.scheduled = []

        # Initialize Robot from Webots API
        super().__init__()

        # Initialize subscriber/listener
        self.subscriber = Subscriber('routing_exchange', 'webots', self.messageCallback)

        # Initialize devices (motors, sensors, cameras..)
        self.findAndEnableDevices(config)


    def findAndEnableDevices(self, config):
        # Time step (Webots)
        self.timeStep = int(self.getBasicTimeStep())
        
        # Motors
        self.motors = {}

        # Motor Position Sensors
        self.sensors = {}

        # Populate Motors and motor position sensors from config file (dict of {joint_name : Webots unique_tag})
        for key, val in config['joints'].items():
            if val['motor'] is not None:
                self.motors[key] = self.getDevice(val['motor'])
            if val['sensor'] is not None:
                self.sensors[key] = self.getDevice(val['sensor'])


    # Callback when receiving message through messaging system
    def messageCallback(self, channel, method, properties, body):
        body = json.loads(body)
        if 'instruction' in body:
            self.instruction = self.findMatchingMotionFunction(body['instruction'])
        elif 'schedule' in body:
            self.scheduled = [self.findMatchingMotionFunction(instruction) for instruction in body['schedule']]
        else:
            helpers.createNewMotion(body)


    def findMatchingMotionFunction(self, s):
        '''
        Finds the closest matching motion-function to match argument using Levenshtein.
        Returns None if minimum edit distance found is >= 5

        ARGS:
            s (str): The string to match on

        RETURNS:
            The name of the closest matching motion-function
        '''
        func_list = helpers.getMotionFunctions()
        min_edit_distance = 5 # The maximum distance allowed
        closest_match = None
        for func in func_list:
            edit_distance = Levenshtein.distance(s, func)
            if  edit_distance < min_edit_distance:
                min_edit_distance = edit_distance
                closest_match = func
        return closest_match


    def motor_set_position_sync(self, tag_motor, tag_sensor, target, delay):
        '''
        Sets motor position and waits for it to reach target position.
        This stops target-positions to be overwritten.

        ARGS:
            tag_motor: (Webots tag) tag of motor to activate
            tag_sensor: (Webots tag) tag of position sensor for motor
            target: (Radians) target position of motor
            delay: (int) delay to apply

        USAGE:
            Use for one motion every keyframe (preferably on motor where target position is changed next keyframe). 
        '''
        DELTA = 0.001;  # max tolerated difference
        tag_motor.setPosition(target)
        tag_sensor.enable(self.timeStep)

        condition = True # flag for emulating "do while"

        while condition:
            # Break simulation
            if self.step(self.timeStep) == -1:
                break
            delay -= self.timeStep
            effective = tag_sensor.getValue() # effective position
            condition = (abs(target - effective) > DELTA and delay > 0)
        tag_sensor.disable()


    # Controller loop
    def run(self):
        while True:
            # Schedule instruction
            if len(self.scheduled) > 0:
                if self.instruction == '':
                    self.instruction = self.scheduled.pop(0)
            
            # Perform instruction
            if self.instruction is None:
                print("Could not find matching motion, please check spelling of MoodCard..")
            elif len(self.instruction) > 0:
                print(f'Performing motion "{self.instruction}"')
                eval("motion_functions." + self.instruction + "(self)") # Should be safe as it only invokes non-dunder-functions in ./motion_functions.py
            
            self.instruction = ''

            # Break simulation (https://cyberbotics.com/doc/reference/robot#wb_robot_step)
            if robot_controller.step(self.timeStep) == -1:
                break



######## RUNS ON SIMULATION START ########

# Read config.yaml
with open('config.yaml') as f:
  config = yaml.safe_load(f)

# Init robot controller
robot_controller = RobotController(config)

# Create threads
controller_thread = threading.Thread(target=robot_controller.run)
message_listener_thread = threading.Thread(target=robot_controller.subscriber.listener)

# Run threads
controller_thread.start()
message_listener_thread.start()

