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

    # Load .Motion files
    def loadMotionFiles(self):
        self.handWave = Motion('../../motions/HandWave.motion')
        self.nod = Motion('../../motions/Nod.motion')
        self.cheer = Motion('../../motions/Cheer.motion')
        self.shakeHead = Motion('../../motions/ShakeHead.motion')
        self.excited = Motion('../../motions/Excited.motion')
        self.thinking = Motion('../../motions/Thinking.motion')

    def messageCallback(channel, method, properties, body):
        motioncall = "self." + body.decode("utf-8")
        startMotion(eval(motioncall))


def main():
    nao = NaoEmotionController()
    nao.run()


# Create threads
controller_thread = threading.Thread(target=main)
listener_thread = threading.Thread(target=self.subscriber.listener)

# Run threads
controller_thread.start()
listener_thread.start()

