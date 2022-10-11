'''
Superclass of all robot controllers.

Inherits from Webots Robot.

This class supplies boilerplate code for python controllers like subscribing to message queues and common functions.

For a controller to be found be Webots, it needs to be in dir controllers/<controllername>/<controllername.py>
'''
import pika
from controller import Robot, Motion
from subscriber import Subscriber

class SuperController(Robot):
    def __init__(self, config):
        '''
        ARGS:
            config: a config file with info on devices (see ./nao_motor_controller/config.yaml)
        '''

        # Initialize Robot from Webots API
        super().__init__()

        # Initialize subscriber/listener
        self.subscriber = Subscriber('routing_exchange', 'webots', self.messageCallback)

        # Initialize devices (motors, sensors, cameras..)
        self.findAndEnableDevices(config)

        # Initialize animation files (.motion)
        self.loadMotionFiles()

        # The motion currently being played
        self.currentlyPlaying = False

        # The instruction waiting to be performed
        self.instruction = ''


    def startMotion(self, motion):
        '''
        Starts a motion.

        ARGS:
            motion: the motion to start (Motion)
        '''
        # Interrupt current motion
        if self.currentlyPlaying:
            self.currentlyPlaying.stop()

        # Start new motion
        motion.play()
        self.currentlyPlaying = motion

        # Clear performed instruction
        self.instruction = ''

    def loadMotionFiles(self):
        '''
        Loads .motion files from file:
        self.handWave = Motion('../../motions/HandWave.motion')
        '''
        pass
        
    def findAndEnableDevices(self, config):
        '''
        Enables devices on robot like motors, sensors, cameras etc..
        '''
        # Time step (Webots)
        self.timeStep = int(self.getBasicTimeStep())
        
        # Motors and Motor Position Sensors (dict of {joint_name : Webots unique_tag})
        self.motors = {}
        self.sensors = {}
        for key, val in config['joints'].items():
            if val['motor'] is not None:
                self.motors[key] = self.getDevice(val['motor'])
            if val['sensor'] is not None:
                self.sensors[key] = self.getDevice(val['sensor'])


    def messageCallback(self, channel, method, properties, body):
        '''
        The function called when a message is received by the subscriber

        ARGS:
            channel: pika.channel.Channel
            method: pika.spec.Basic.Deliver
            properties: pika.spec.BasicProperties
            body: bytes
        '''
        pass

    def run(self):
        '''
        Function that contains the main controller loop.

        This function should be run in a seperate thread from the subscriber.
        '''
        pass

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

    