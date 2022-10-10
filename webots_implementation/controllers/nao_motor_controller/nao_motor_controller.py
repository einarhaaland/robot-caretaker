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
        self.config = config
        self.instruction = ''
        super().__init__()


    def findAndEnableDevices(self):
        devices = self.config['devices']
        self.timeStep = int(self.getBasicTimeStep())
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
                    self.wave()
                elif instruction == 'Nod':
                    self.nod()
                elif instruction == 'Cheer':
                    self.cheer()
                elif instruction == 'ShakeHead':
                    self.shakeHead()
                elif instruction == 'Thinking':
                    self.thinking()
                elif instruction != '':
                    print("Received unknown command:")
                
                # Reset instruction
                if instruction != '':
                    print('Performed: ' + instruction)
                    self.instruction = ''

                # Break simulation
                if nao.step(self.timeStep) == -1:
                    break


    ########## MOTION FUNCTIONS ##########
    # In the future, motions should be created through an editor and motion functions should be generated
    def wave(self):
        # Get Motors
        r_shoulder_pitch = self.getDevice(self.config['joints']['RShoulderPitch']['motor'])
        r_shoulder_roll = self.getDevice(self.config['joints']['RShoulderRoll']['motor'])
        l_shoulder_pitch = self.getDevice(self.config['joints']['LShoulderPitch']['motor'])

        # Get sensors
        r_shoulder_pitch_s = self.getDevice(self.config['joints']['RShoulderPitch']['sensor'])
        r_shoulder_roll_s = self.getDevice(self.config['joints']['RShoulderRoll']['sensor'])
        l_shoulder_pitch_s = self.getDevice(self.config['joints']['LShoulderPitch']['sensor'])

        # Set motors (numbers are poses)
        # 1
        l_shoulder_pitch.setPosition(1.49797)
        self.motor_set_position_sync(r_shoulder_pitch, r_shoulder_pitch_s, -1.5, 250)
        # 2
        self.motor_set_position_sync(r_shoulder_roll, r_shoulder_roll_s, 0.3, 250)
        # 3
        self.motor_set_position_sync(r_shoulder_roll, r_shoulder_roll_s, -0.5, 250)
        # 4
        self.motor_set_position_sync(r_shoulder_roll, r_shoulder_roll_s, 0.3, 250)
        # 5
        self.motor_set_position_sync(r_shoulder_roll, r_shoulder_roll_s, -0.5, 250)
        # 6
        self.motor_set_position_sync(r_shoulder_roll, r_shoulder_roll_s, 0, 250)
        # Reset
        self.motor_set_position_sync(r_shoulder_pitch, r_shoulder_pitch_s, 1.5, 250)
        
    def nod(self):
        # Get motors
        head_pitch = self.getDevice(self.config['joints']['HeadPitch']['motor'])

        # Set motors (numbers are poses)
        # 1
        head_pitch.setPosition(0)
        # 2
        head_pitch.setPosition(0.5)
        # 3
        head_pitch.setPosition(-0.5)
        # 4
        head_pitch.setPosition(0.5)
        # 5
        head_pitch.setPosition(-0.5)
        # 6
        head_pitch.setPosition(0.5)
        # Reset
        head_pitch.setPosition(0)

    def shakeHead(self):
        # Get motors
        head_yaw = self.getDevice(self.config['joints']['HeadYaw']['motor'])

        # Set motors (numbers are poses)
        # 1
        head_yaw.setPosition(0)
        # 2
        head_yaw.setPosition(0.5)
        # 3
        head_yaw.setPosition(-0.5)
        # 4
        head_yaw.setPosition(0.5)
        # 5
        head_yaw.setPosition(-0.5)
        # 6
        head_yaw.setPosition(0.5)
        # Reset
        head_yaw.setPosition(0)

    def cheer(self):
        # Get motors
        hp = self.getDevice(self.config['joints']['HeadPitch']['motor'])
        lsp = self.getDevice(self.config['joints']['LShoulderPitch']['motor'])
        rsp = self.getDevice(self.config['joints']['RShoulderPitch']['motor'])
        lhp = self.getDevice(self.config['joints']['LHipPitch']['motor'])
        rhp = self.getDevice(self.config['joints']['RHipPitch']['motor'])
        lkp = self.getDevice(self.config['joints']['LKneePitch']['motor'])
        rkp = self.getDevice(self.config['joints']['RKneePitch']['motor'])
        lap = self.getDevice(self.config['joints']['LAnklePitch']['motor'])
        rap = self.getDevice(self.config['joints']['RAnklePitch']['motor'])
        ler = self.getDevice(self.config['joints']['LElbowRoll']['motor'])
        rer = self.getDevice(self.config['joints']['RElbowRoll']['motor'])

        # Get sensors

        # Set motors (numbers are poses)
        # 1 (only included in corresponding motion file)
        # 2
        hp.setPosition(0.4)
        lsp.setPosition(-1.5)
        rsp.setPosition(-1.5)
        lhp.setPosition(-0.2)
        rhp.setPosition(-0.2)
        lkp.setPosition(0.5)
        rkp.setPosition(0.5)
        lap.setPosition(-0.3)
        rap.setPosition(-0.3)
        ler.setPosition(-0.5)
        rer.setPosition(0.5)
        # 3
        hp.setPosition(-0.2)
        lhp.setPosition(0)
        rhp.setPosition(0)
        lkp.setPosition(0)
        rkp.setPosition(0)
        lap.setPosition(0)
        rap.setPosition(0)
        ler.setPosition(0)
        rer.setPosition(0)
        # 4
        hp.setPosition(0.4)
        lhp.setPosition(-0.2)
        rhp.setPosition(-0.2)
        lkp.setPosition(0.5)
        rkp.setPosition(0.5)
        lap.setPosition(-0.3)
        rap.setPosition(-0.3)
        ler.setPosition(-0.5)
        rer.setPosition(0.5)
        # 5
        hp.setPosition(-0.2)
        lhp.setPosition(0)
        rhp.setPosition(0)
        lkp.setPosition(0)
        rkp.setPosition(0)
        lap.setPosition(0)
        rap.setPosition(0)
        ler.setPosition(0)
        rer.setPosition(0)
        # 6
        hp.setPosition(0.4)
        lhp.setPosition(-0.2)
        rhp.setPosition(-0.2)
        lkp.setPosition(0.5)
        rkp.setPosition(0.5)
        lap.setPosition(-0.3)
        rap.setPosition(-0.3)
        ler.setPosition(-0.5)
        rer.setPosition(0.5)
        # 7
        hp.setPosition(-0.2)
        lhp.setPosition(0)
        rhp.setPosition(0)
        lkp.setPosition(0)
        rkp.setPosition(0)
        lap.setPosition(0)
        rap.setPosition(0)
        ler.setPosition(0)
        rer.setPosition(0)
        # 8
        hp.setPosition(0.4)
        lhp.setPosition(-0.2)
        rhp.setPosition(-0.2)
        lkp.setPosition(0.5)
        rkp.setPosition(0.5)
        lap.setPosition(-0.3)
        rap.setPosition(-0.3)
        ler.setPosition(-0.5)
        rer.setPosition(0.5)
        # reset
        hp.setPosition(0)
        lsp.setPosition(1.5)
        rsp.setPosition(1.5)
        lhp.setPosition(0)
        rhp.setPosition(0)
        lkp.setPosition(0)
        rkp.setPosition(0)
        lap.setPosition(0)
        rap.setPosition(0)
        ler.setPosition(0)
        rer.setPosition(0)
        
    def thinking(self):
        # Get motors
        lsp = self.getDevice(self.config['joints']['LShoulderPitch']['motor'])
        ler = self.getDevice(self.config['joints']['LElbowRoll']['motor'])
        lwy = self.getDevice(self.config['joints']['LWristYaw']['motor'])
        hy = self.getDevice(self.config['joints']['HeadYaw']['motor'])
        hp = self.getDevice(self.config['joints']['HeadPitch']['motor'])

        # Set motors
        # 1 (only included in corresponding motion file)
        # 2
        lsp.setPosition(-1.5)
        ler.setPosition(-1.2)
        lwy.setPosition(-1.5)
        hy.setPosition(-0.5)
        hy.setPosition(0.5)
        # 3
        lsp.setPosition(-1)
        # 4
        lsp.setPosition(-1.5)
        # 5
        lsp.setPosition(-1)
        # 6
        lsp.setPosition(-1.5)
        # 7
        lsp.setPosition(-1)
        # Reset
        lsp.setPosition(1.5)
        ler.setPosition(0)
        lwy.setPosition(0)
        hy.setPosition(0)
        hy.setPosition(0)

            
# Read config.yaml
with open('config.yaml') as f:
  config = yaml.safe_load(f)

# Init robotcontroller
nao = NaoMotorController(config)

# Create threads
controller_thread = threading.Thread(target=nao.run)
listener_thread = threading.Thread(target=nao.subscriber.listener)

# Run threads
controller_thread.start()
listener_thread.start()

