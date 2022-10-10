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
        # Get motors
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

        # Get sensors
        head_pitch_s = self.getDevice(self.config['joints']['HeadPitch']['sensor'])

        # Set motors (numbers are poses)
        # 1
        self.motor_set_position_sync(head_pitch, head_pitch_s, 0, 250)
        # 2
        self.motor_set_position_sync(head_pitch, head_pitch_s, 0.5, 250)
        # 3
        self.motor_set_position_sync(head_pitch, head_pitch_s, -0.5, 250)
        # 4
        self.motor_set_position_sync(head_pitch, head_pitch_s, 0.5, 250)
        # 5
        self.motor_set_position_sync(head_pitch, head_pitch_s, -0.5, 250)
        # 6
        self.motor_set_position_sync(head_pitch, head_pitch_s, 0.5, 250)
        # Reset
        self.motor_set_position_sync(head_pitch, head_pitch_s, 0, 250)

    def shakeHead(self):
        # Get motors
        head_yaw = self.getDevice(self.config['joints']['HeadYaw']['motor'])

        # Get sensors
        head_yaw_s = self.getDevice(self.config['joints']['HeadYaw']['sensor'])

        # Set motors (numbers are poses)
        # 1
        self.motor_set_position_sync(head_yaw, head_yaw_s, 0, 250)
        # 2
        self.motor_set_position_sync(head_yaw, head_yaw_s, 0.5, 250)
        # 3
        self.motor_set_position_sync(head_yaw, head_yaw_s, -0.5, 250)
        # 4
        self.motor_set_position_sync(head_yaw, head_yaw_s, 0.5, 250)
        # 5
        self.motor_set_position_sync(head_yaw, head_yaw_s, -0.5, 250)
        # 6
        self.motor_set_position_sync(head_yaw, head_yaw_s, 0.5, 250)
        # Reset
        self.motor_set_position_sync(head_yaw, head_yaw_s, 0, 250)

    def cheer(self):
        # Get motors
        head_pitch = self.getDevice(self.config['joints']['HeadPitch']['motor'])
        l_shoulder_pitch = self.getDevice(self.config['joints']['LShoulderPitch']['motor'])
        r_shoulder_pitch = self.getDevice(self.config['joints']['RShoulderPitch']['motor'])
        l_hip_pitch = self.getDevice(self.config['joints']['LHipPitch']['motor'])
        r_hip_pitch = self.getDevice(self.config['joints']['RHipPitch']['motor'])
        l_knee_pitch = self.getDevice(self.config['joints']['LKneePitch']['motor'])
        r_knee_pitch = self.getDevice(self.config['joints']['RKneePitch']['motor'])
        l_ankle_pitch = self.getDevice(self.config['joints']['LAnklePitch']['motor'])
        r_ankle_pitch = self.getDevice(self.config['joints']['RAnklePitch']['motor'])
        l_elbow_roll = self.getDevice(self.config['joints']['LElbowRoll']['motor'])
        r_elbow_roll = self.getDevice(self.config['joints']['RElbowRoll']['motor'])

        # Get sensors
        head_pitch_s = self.getDevice(self.config['joints']['HeadPitch']['sensor'])
        l_shoulder_pitch_s = self.getDevice(self.config['joints']['LShoulderPitch']['sensor'])
        r_shoulder_pitch_s = self.getDevice(self.config['joints']['RShoulderPitch']['sensor'])
        l_hip_pitch_s = self.getDevice(self.config['joints']['LHipPitch']['sensor'])
        r_hip_pitch_s = self.getDevice(self.config['joints']['RHipPitch']['sensor'])
        l_knee_pitch_s = self.getDevice(self.config['joints']['LKneePitch']['sensor'])
        r_knee_pitch_s = self.getDevice(self.config['joints']['RKneePitch']['sensor'])
        l_ankle_pitch_s = self.getDevice(self.config['joints']['LAnklePitch']['sensor'])
        r_ankle_pitch_s = self.getDevice(self.config['joints']['RAnklePitch']['sensor'])
        l_elbow_roll_s = self.getDevice(self.config['joints']['LElbowRoll']['sensor'])
        r_elbow_roll_s = self.getDevice(self.config['joints']['RElbowRoll']['sensor'])

        # Set motors (numbers are poses)
        # 1 (only included in corresponding motion file)
        # 2
        head_pitch.setPosition(0.4)
        l_shoulder_pitch.setPosition(-1.5)
        r_shoulder_pitch.setPosition(-1.5)
        l_hip_pitch.setPosition(-0.2)
        r_hip_pitch.setPosition(-0.2)
        l_knee_pitch.setPosition(0.5)
        r_knee_pitch.setPosition(0.5)
        l_ankle_pitch.setPosition(-0.25)
        r_ankle_pitch.setPosition(-0.25)
        l_elbow_roll.setPosition(-0.5)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0.5, 250)
        # 3
        head_pitch.setPosition(-0.2)
        l_hip_pitch.setPosition(0)
        r_hip_pitch.setPosition(0)
        l_knee_pitch.setPosition(0)
        r_knee_pitch.setPosition(0)
        l_ankle_pitch.setPosition(0)
        r_ankle_pitch.setPosition(0)
        l_elbow_roll.setPosition(0)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0, 250)
        # 4
        head_pitch.setPosition(0.4)
        l_hip_pitch.setPosition(-0.2)
        r_hip_pitch.setPosition(-0.2)
        l_knee_pitch.setPosition(0.5)
        r_knee_pitch.setPosition(0.5)
        l_ankle_pitch.setPosition(-0.3)
        r_ankle_pitch.setPosition(-0.3)
        l_elbow_roll.setPosition(-0.5)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0.5, 250)
        # 5
        head_pitch.setPosition(-0.2)
        l_hip_pitch.setPosition(0)
        r_hip_pitch.setPosition(0)
        l_knee_pitch.setPosition(0)
        r_knee_pitch.setPosition(0)
        l_ankle_pitch.setPosition(0)
        r_ankle_pitch.setPosition(0)
        l_elbow_roll.setPosition(0)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0, 250)
        # 6
        head_pitch.setPosition(0.4)
        l_hip_pitch.setPosition(-0.2)
        r_hip_pitch.setPosition(-0.2)
        l_knee_pitch.setPosition(0.5)
        r_knee_pitch.setPosition(0.5)
        l_ankle_pitch.setPosition(-0.3)
        r_ankle_pitch.setPosition(-0.3)
        l_elbow_roll.setPosition(-0.5)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0.5, 250)
        # 7
        head_pitch.setPosition(-0.2)
        l_hip_pitch.setPosition(0)
        r_hip_pitch.setPosition(0)
        l_knee_pitch.setPosition(0)
        r_knee_pitch.setPosition(0)
        l_ankle_pitch.setPosition(0)
        r_ankle_pitch.setPosition(0)
        l_elbow_roll.setPosition(0)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0, 250)
        # 8
        head_pitch.setPosition(0.4)
        l_hip_pitch.setPosition(-0.2)
        r_hip_pitch.setPosition(-0.2)
        l_knee_pitch.setPosition(0.5)
        r_knee_pitch.setPosition(0.5)
        l_ankle_pitch.setPosition(-0.3)
        r_ankle_pitch.setPosition(-0.3)
        l_elbow_roll.setPosition(-0.5)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0.5, 250)
        # reset
        head_pitch.setPosition(0)
        l_shoulder_pitch.setPosition(1.5)
        r_shoulder_pitch.setPosition(1.5)
        l_hip_pitch.setPosition(0)
        r_hip_pitch.setPosition(0)
        l_knee_pitch.setPosition(0)
        r_knee_pitch.setPosition(0)
        l_ankle_pitch.setPosition(0)
        r_ankle_pitch.setPosition(0)
        l_elbow_roll.setPosition(0)
        self.motor_set_position_sync(r_elbow_roll, r_elbow_roll_s, 0, 250)
        
    def thinking(self):
        # Get motors
        l_shoulder_pitch = self.getDevice(self.config['joints']['LShoulderPitch']['motor'])
        l_elbow_roll = self.getDevice(self.config['joints']['LElbowRoll']['motor'])
        l_wrist_yaw = self.getDevice(self.config['joints']['LWristYaw']['motor'])
        head_yaw = self.getDevice(self.config['joints']['HeadYaw']['motor'])
        head_pitch = self.getDevice(self.config['joints']['HeadPitch']['motor'])

        # Get sensors
        l_shoulder_pitch_s = self.getDevice(self.config['joints']['LShoulderPitch']['sensor'])
        l_elbow_roll_s = self.getDevice(self.config['joints']['LElbowRoll']['sensor'])
        l_wrist_yaw_s = self.getDevice(self.config['joints']['LWristYaw']['sensor'])
        head_yaw_s = self.getDevice(self.config['joints']['HeadYaw']['sensor'])
        head_pitch_s = self.getDevice(self.config['joints']['HeadPitch']['sensor'])

        # Set motors
        # 1 (only included in corresponding motion file)
        # 2
        l_elbow_roll.setPosition(-1.2)
        l_wrist_yaw.setPosition(-1.5)
        head_yaw.setPosition(-0.5)
        head_pitch.setPosition(0.5)
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, -1.5, 250)
        # 3
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, -1, 250)
        # 4
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, -1.5, 250)
        # 5
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, -1, 250)
        # 6
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, -1.5, 250)
        # 7
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, -1, 250)
        # Reset
        l_elbow_roll.setPosition(0)
        l_wrist_yaw.setPosition(0)
        head_yaw.setPosition(0)
        head_pitch.setPosition(0)
        self.motor_set_position_sync(l_shoulder_pitch, l_shoulder_pitch_s, 1.5, 250)

            
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

