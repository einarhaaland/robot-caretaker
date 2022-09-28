'''
For this file to be found, folder needs to have same name as this file: 
    nao_emotion_controller/nao_emotion_controller.py
'''

import threading
from controller import Robot, Keyboard, Motion
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
        self.excited = Motion('../../motions/Excited.motion')
        self.thinking = Motion('../../motions/Thinking.motion')

    def messageCallback(self, channel, method, properties, body):
        self.instruction = body

    def run(self):
        while True:
                instruction = self.instruction

                if instruction == 'Wave':
                    self.startMotion(self.wave)
                elif instruction == 'Nod':
                    self.startMotion(self.nod)
                elif instruction == 'Cheer':
                    self.startMotion(self.cheer)
                elif instruction == 'ShakeHead':
                    self.startMotion(self.shakeHead)
                elif instruction == 'Excited':
                    self.startMotion(self.excited)
                elif instruction == 'Thinking':
                    self.startMotion(self.thinking)


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

