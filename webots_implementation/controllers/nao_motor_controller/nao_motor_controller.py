'''
This controller accesses motors to perform animation. Webots Motions are not used.

HOW TO IMPLEMENT YOUR OWN ROBOT:
    * Copy file structure
    * Rename files appropriatly
    * Fill in relevant values in config file (you can add more devices)
    * Create motion functions akin to those below: wave(), nod()..
    * Call motion function in run() ( add elif instruction == 'your instruction': self.<motionfunction()> )
    * Add robot to webot world and change its controller
    * Start system (see README.me)

'''
import sys
import os
import threading
import yaml
from controller import Robot, Motor

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
        super().__init__(config)

    # Callback when receiving message through messaging system
    def messageCallback(self, channel, method, properties, body):
        self.instruction = body.decode("utf-8")

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


    ############################### MOTION FUNCTIONS ###############################
    ''' 
        Future Work: 
            * Motions should be created using an editor 
            * Motion functions should be generated along with run()
    '''
    def wave(self):
        # Keyframe 1
        self.motors['LShoulderPitch'].setPosition(1.49797)
        self.motor_set_position_sync(self.motors['RShoulderPitch'], self.sensors['RShoulderPitch'], -1.5, 250)
        # Keyframe 2
        self.motor_set_position_sync(self.motors['RShoulderRoll'], self.sensors['RShoulderRoll'], 0.3, 250)
        # Keyframe 3
        self.motor_set_position_sync(self.motors['RShoulderRoll'], self.sensors['RShoulderRoll'], -0.5, 250)
        # Keyframe 4
        self.motor_set_position_sync(self.motors['RShoulderRoll'], self.sensors['RShoulderRoll'], 0.3, 250)
        # Keyframe 5
        self.motor_set_position_sync(self.motors['RShoulderRoll'], self.sensors['RShoulderRoll'], -0.5, 250)
        # Keyframe 6
        self.motor_set_position_sync(self.motors['RShoulderRoll'], self.sensors['RShoulderRoll'], 0, 250)
        # Reset motor positions
        self.motor_set_position_sync(self.motors['RShoulderPitch'], self.sensors['RShoulderPitch'], 1.5, 250)
        
    def nod(self):
        # Keyframe 1
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], 0, 250)
        # Keyframe 2
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], 0.5, 250)
        # Keyframe 3
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], -0.5, 250)
        # Keyframe 4
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], 0.5, 250)
        # Keyframe 5
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], -0.5, 250)
        # Keyframe 6
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], 0.5, 250)
        # Reset motor positions
        self.motor_set_position_sync(self.motors['HeadPitch'], self.sensors['HeadPitch'], 0, 250)

    def shakeHead(self):
        # Keyframe 1
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], 0, 250)
        # Keyframe 2
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], 0.5, 250)
        # Keyframe 3
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], -0.5, 250)
        # Keyframe 4
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], 0.5, 250)
        # Keyframe 5
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], -0.5, 250)
        # Keyframe 6
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], 0.5, 250)
        # Reset motor positions
        self.motor_set_position_sync(self.motors['HeadYaw'], self.sensors['HeadYaw'], 0, 250)

    def cheer(self):
        # Keyframe 1
        self.motors['HeadPitch'].setPosition(0.4)
        self.motors['LShoulderPitch'].setPosition(-1.5)
        self.motors['RShoulderPitch'].setPosition(-1.5)
        self.motors['LHipPitch'].setPosition(-0.2)
        self.motors['RHipPitch'].setPosition(-0.2)
        self.motors['LKneePitch'].setPosition(0.5)
        self.motors['RKneePitch'].setPosition(0.5)
        self.motors['LAnklePitch'].setPosition(-0.25)
        self.motors['RAnklePitch'].setPosition(-0.25)
        self.motors['LElbowRoll'].setPosition(-0.5)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0.5, 250)
        # Keyframe 2
        self.motors['HeadPitch'].setPosition(-0.2)
        self.motors['LHipPitch'].setPosition(0)
        self.motors['RHipPitch'].setPosition(0)
        self.motors['LKneePitch'].setPosition(0)
        self.motors['RKneePitch'].setPosition(0)
        self.motors['LAnklePitch'].setPosition(0)
        self.motors['RAnklePitch'].setPosition(0)
        self.motors['LElbowRoll'].setPosition(0)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0, 250)
        # Keyframe 3
        self.motors['HeadPitch'].setPosition(0.4)
        self.motors['LHipPitch'].setPosition(-0.2)
        self.motors['RHipPitch'].setPosition(-0.2)
        self.motors['LKneePitch'].setPosition(0.5)
        self.motors['RKneePitch'].setPosition(0.5)
        self.motors['LAnklePitch'].setPosition(-0.25)
        self.motors['RAnklePitch'].setPosition(-0.25)
        self.motors['LElbowRoll'].setPosition(-0.5)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0.5, 250)
        # Keyframe 4
        self.motors['HeadPitch'].setPosition(-0.2)
        self.motors['LHipPitch'].setPosition(0)
        self.motors['RHipPitch'].setPosition(0)
        self.motors['LKneePitch'].setPosition(0)
        self.motors['RKneePitch'].setPosition(0)
        self.motors['LAnklePitch'].setPosition(0)
        self.motors['RAnklePitch'].setPosition(0)
        self.motors['LElbowRoll'].setPosition(0)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0, 250)
        # Keyframe 5
        self.motors['HeadPitch'].setPosition(0.4)
        self.motors['LHipPitch'].setPosition(-0.2)
        self.motors['RHipPitch'].setPosition(-0.2)
        self.motors['LKneePitch'].setPosition(0.5)
        self.motors['RKneePitch'].setPosition(0.5)
        self.motors['LAnklePitch'].setPosition(-0.25)
        self.motors['RAnklePitch'].setPosition(-0.25)
        self.motors['LElbowRoll'].setPosition(-0.5)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0.5, 250)
        # Keyframe 6
        self.motors['HeadPitch'].setPosition(-0.2)
        self.motors['LHipPitch'].setPosition(0)
        self.motors['RHipPitch'].setPosition(0)
        self.motors['LKneePitch'].setPosition(0)
        self.motors['RKneePitch'].setPosition(0)
        self.motors['LAnklePitch'].setPosition(0)
        self.motors['RAnklePitch'].setPosition(0)
        self.motors['LElbowRoll'].setPosition(0)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0, 250)
        # Keyframe 7
        self.motors['HeadPitch'].setPosition(0.4)
        self.motors['LHipPitch'].setPosition(-0.2)
        self.motors['RHipPitch'].setPosition(-0.2)
        self.motors['LKneePitch'].setPosition(0.5)
        self.motors['RKneePitch'].setPosition(0.5)
        self.motors['LAnklePitch'].setPosition(-0.25)
        self.motors['RAnklePitch'].setPosition(-0.25)
        self.motors['LElbowRoll'].setPosition(-0.5)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0.5, 250)
        # Reset motor positions
        self.motors['HeadPitch'].setPosition(0)
        self.motors['LShoulderPitch'].setPosition(1.5)
        self.motors['RShoulderPitch'].setPosition(1.5)
        self.motors['LHipPitch'].setPosition(0)
        self.motors['RHipPitch'].setPosition(0)
        self.motors['LKneePitch'].setPosition(0)
        self.motors['RKneePitch'].setPosition(0)
        self.motors['LAnklePitch'].setPosition(0)
        self.motors['RAnklePitch'].setPosition(0)
        self.motors['LElbowRoll'].setPosition(0)
        self.motor_set_position_sync(self.motors['RElbowRoll'], self.sensors['RElbowRoll'], 0, 250)
        
    def thinking(self):
        # Keyframe 1
        self.motors['LElbowRoll'].setPosition(-1.2)
        self.motors['LWristYaw'].setPosition(-1.5)
        self.motors['HeadYaw'].setPosition(-0.5)
        self.motors['HeadPitch'].setPosition(0.5)
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], -1.5, 250)
        # Keyframe 2
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], -1, 250)
        # Keyframe 3
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], -1.5, 250)
        # Keyframe 4
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], -1, 250)
        # Keyframe 5
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], -1.5, 250)
        # Keyframe 6
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], -1, 250)
        # Reset motor positions
        self.motors['LElbowRoll'].setPosition(0)
        self.motors['LWristYaw'].setPosition(0)
        self.motors['HeadYaw'].setPosition(0)
        self.motors['HeadPitch'].setPosition(0)
        self.motor_set_position_sync(self.motors['LShoulderPitch'], self.sensors['LShoulderPitch'], 1.5, 250)

            
# Read config.yaml
with open('config.yaml') as f:
  config = yaml.safe_load(f)

# Init robotcontroller
nao = NaoMotorController(config)

# Create threads
controller_thread = threading.Thread(target=nao.run)
message_listener_thread = threading.Thread(target=nao.subscriber.listener)

# Run threads
controller_thread.start()
message_listener_thread.start()

