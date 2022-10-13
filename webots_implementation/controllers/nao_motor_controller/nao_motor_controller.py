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
import motion_functions
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

                # Add call to Motion-Functions here
                if instruction == 'Wave':
                    motion_functions.wave(self)
                elif instruction == 'Nod':
                    motion_functions.nod(self)
                elif instruction == 'Cheer':
                    motion_functions.cheer(self)
                elif instruction == 'ShakeHead':
                    motion_functions.shakeHead(self)
                elif instruction == 'Thinking':
                    motion_functions.thinking(self)
                elif instruction != '':
                    print("Received unknown command:")
                
                # Reset instruction
                if instruction != '':
                    print('Performed: ' + instruction)
                    self.instruction = ''

                # Break simulation
                if nao.step(self.timeStep) == -1:
                    break

            
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

