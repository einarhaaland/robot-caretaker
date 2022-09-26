'''
Superclass of all robot controllers.

This class supplies boilerplate code for python controllers like subscribing to message queues.
'''

from subscriber import Subscriber

class SuperController():
    def __init__():
        self.subscriber = Subscriber('routing_exchange', 'webots', startMotion)

    # Create general controller here (look at webots controller)

    def startMotion():
        pass