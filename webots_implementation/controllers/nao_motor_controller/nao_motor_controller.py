'''
This controller accesses motors to perform animation. Webots Motions are not used.

HOW TO IMPLEMENT YOUR OWN:
    * Copy file structure
    * Rename files appropriatly
    * Fill in relevant values in config file
    * Design motion(s) (Create motion functions akin to those below (wave(), nod()...))
    * Call motion function in run() ( add elif instruction == 'your instruction': self.<motionfunction()> )
    * Add robot to webot world and change its controller
    * Start system (see README.me)

'''
import sys
import os
import threading
import yaml
from controller import Robot, Keyboard, Motion, Motor

# import supercontroller
controller_path = os.path.join(os.getcwd(), os.pardir)
sys.path.insert(0, controller_path)
from super_controller import SuperController


class NaoMotorController(SuperController):
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

        '''
        # Gyroscopes
        if devices['gyroscopes'] is not None:
            self.gyroscopes = [ self.getDevice(motor) for motor in devices['gyroscopes'] ]

        # Accelerometers
        if devices['accelerometers'] is not None:
            self.accelerometers = [ self.getDevice(motor) for motor in devices['accelerometers'] ]

        # Cameras
        if devices['cameras'] is not None:
            self.cameras = [ self.getDevice(motor) for motor in devices['cameras'] ]

        # Inertial Units
        if devices['intertial_units'] is not None:
            self.intertial_units = [ self.getDevice(motor) for motor in devices['inertial_units'] ]

        # Sensors
        if devices['sensors'] is not None:
            self.sensors = [ self.getDevice(motor) for motor in devices['sensors'] ]
        '''

    # Callback when receiving message through messaging system
    def messageCallback(self, channel, method, properties, body):
        self.instruction = body.decode("utf-8")
        print(self.instruction)

    # Controller loop
    def run(self):
        while True:
                instruction = self.instruction

                if instruction == 'Wave':
                    print('Performed: ' + instruction)
                    self.wave()
                elif instruction != '':
                    print("Received unknown command")

                if nao.step(self.timeStep) == -1:
                    break


    ##### MOTION FUNCTIONS #####
    def wave(self):
        r_shoulder_pitch = self.getDevice(self.config['motor_names']['RShoulderPitch'])
        r_shoulder_roll = self.getDevice(self.config['motor_names']['RShoulderRoll'])
        l_shoulder_pitch = self.getDevice(self.config['motor_names']['LShoulderPitch'])

        r_shoulder_pitch.setPosition(-1.5)
        l_shoulder_pitch.setPostition(1.49797)

        r_shoulder_roll.setPostition(0.3)
        r_shoulder_roll.setPostition(-0.5)
        r_shoulder_roll.setPostition(0.3)
        r_shoulder_roll.setPostition(-0.5)
        r_shoulder_roll.setPostition(0)

        r_shoulder_pitch.setPosition(1.4)
        
    def nod():
        pass

    def cheer():
        pass

    def shakeHead():
        pass
        
    def thinking():
        pass

            
# Read config.yaml
with open('config.yaml') as f:
  config = yaml.load(f)

# Init robotcontroller
nao = NaoMotorController(config)

# Create threads
controller_thread = threading.Thread(target=nao.run)
listener_thread = threading.Thread(target=nao.subscriber.listener)

# Run threads
controller_thread.start()
listener_thread.start()

