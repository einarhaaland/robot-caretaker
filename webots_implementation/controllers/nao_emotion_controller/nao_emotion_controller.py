'''
This controller uses Webots Motion to perform animation. Motors are not directly accessed.
'''
import sys
import os
import threading
from controller import Robot, Keyboard, Motion

# import supercontroller
controller_path = os.path.join(os.getcwd(), os.pardir)
sys.path.insert(0, controller_path)
from super_controller import SuperController


class NaoEmotionController(SuperController):
    '''
    Nao-specific controller.
    Sub class of ../Controller.py
    '''

    # Constructor
    def __init__(self):
        super().__init__()
        self.instruction = ''

    # Load .Motion files
    def loadMotionFiles(self):
        self.wave = Motion('../../motions/HandWave.motion')
        self.nod = Motion('../../motions/Nod.motion')
        self.cheer = Motion('../../motions/Cheer.motion')
        self.shakeHead = Motion('../../motions/ShakeHead.motion')
        self.thinking = Motion('../../motions/Thinking.motion')

    def messageCallback(self, channel, method, properties, body):
        self.instruction = body.decode("utf-8")
        print(self.instruction)

    def run(self):
        while True:
                instruction = self.instruction

                if instruction == 'Wave':
                    print('Performed: ' + instruction)
                    self.startMotion(self.wave)
                elif instruction == 'Nod':
                    print('Performed: ' + instruction)
                    self.startMotion(self.nod)
                elif instruction == 'Cheer':
                    print('Performed: ' + instruction)
                    self.startMotion(self.cheer)
                elif instruction == 'ShakeHead':
                    print('Performed: ' + instruction)
                    self.startMotion(self.shakeHead)
                elif instruction == 'Thinking':
                    print('Performed: ' + instruction)
                    self.startMotion(self.thinking)
                elif instruction != '':
                    print("Received unknown command")

                if nao.step(self.timeStep) == -1:
                    break
            


# Init robotcontroller
nao = NaoEmotionController()

# Create threads
controller_thread = threading.Thread(target=nao.run)
listener_thread = threading.Thread(target=nao.subscriber.listener)

# Run threads
controller_thread.start()
listener_thread.start()

