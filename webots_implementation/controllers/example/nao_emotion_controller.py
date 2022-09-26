'''
For this file to be found, folder needs to have same name as this file: 
    nao_emotion_controller/nao_emotion_controller.py
'''


import threading
from super_controller import SuperController


class NaoEmotionController(SuperController):
    '''
    Nao-specific controller.
    Sub class of ../Controller.py
    '''
    def __init__(self):
        super().__init__()


def main():
    nao = NaoEmotionController()
    nao.run()


# Create threads
controller_thread = threading.Thread(target=main)
listener_thread = threading.Thread(target=self.subscriber.listener)

# Run threads
controller_thread.start()
listener_thread.start()

