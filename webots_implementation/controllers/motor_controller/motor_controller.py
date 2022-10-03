'''
This controller accesses motors to perform animation. Webots Motions are not used.
Params are defined in config.yaml
'''
import sys
import os
import threading
import yaml
from controller import Robot, Keyboard, Motion

# import supercontroller
controller_path = os.path.join(os.getcwd(), os.pardir)
sys.path.insert(0, controller_path)
from super_controller import SuperController


class MotorController(SuperController):
    '''
    Motor controller.
    Sub class of ../Controller.py
    '''

    # Constructor
    def __init__(self, config):
        super().__init__()
        self.config = config
        self.instruction = ''


    def findAndEnableDevices(self):
        devices = self.config['devices']

        # Motors
        if devices['motors']:
            self.motors = [ self.getDevice(motor) for motor in devices['motors'] ]
        '''
        # Gyroscopes
        if devices['gyroscopes']:
            self.gyroscopes = [ self.getDevice(motor) for motor in devices['gyroscopes'] ]

        # Accelerometers
        if devices['accelerometers']:
            self.accelerometers = [ self.getDevice(motor) for motor in devices['accelerometers'] ]

        # Cameras
        if devices['cameras']:
            self.cameras = [ self.getDevice(motor) for motor in devices['cameras'] ]

        # Inertial Units
        if devices['intertial_units']:
            self.intertial_units = [ self.getDevice(motor) for motor in devices['inertial_units'] ]

        # Sensors
        if devices['sensors']:
            self.sensors = [ self.getDevice(motor) for motor in devices['sensors'] ]
        '''


    def messageCallback(self, channel, method, properties, body):
        self.instruction = body.decode("utf-8")
        print(self.instruction)


    def run(self):
        pass
        
            
# Read config.yaml
with open('config.yaml') as f:
  config = yaml.load(f)

# Init robotcontroller
robot = MotorController(config)

# Create threads
controller_thread = threading.Thread(target=robot.run)
listener_thread = threading.Thread(target=robot.subscriber.listener)

# Run threads
controller_thread.start()
listener_thread.start()

