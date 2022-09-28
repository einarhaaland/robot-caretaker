'''
Superclass of all robot controllers.

Inherits from Webots Robot.

This class supplies boilerplate code for python controllers like subscribing to message queues and common functions.
'''
import pika
from controller import Robot, Motion
from subscriber import Subscriber

class SuperController(Robot):
    def __init__(self):
        # Initialize Robot from Webots API
        super().__init__()

        # Initialize subscriber/listener
        self.subscriber = Subscriber('routing_exchange', 'webots', self.messageCallback)

        # Initialize devices (sensors..)
        self.findAndEnableDevices()

        # Initialize animation files (.motion)
        self.loadMotionFiles()

        # The motion currently being played
        self.currentlyPlaying = False

        # The instruction waiting to be performed
        self.instruction = ''


    def startMotion(self, motion):
        '''
        Starts a motion.

        ARGS:
        motion: the motion to start (Motion)
        '''
        # Interrupt current motion
        if self.currentlyPlaying:
            self.currentlyPlaying.stop()

        # Start new motion
        motion.play()
        self.currentlyPlaying = motion

        # Clear performed instruction
        self.instruction = ''

    def loadMotionFiles(self):
        '''
        Loads .motion files from file:
        self.handWave = Motion('../../motions/HandWave.motion')
        '''
        pass

    def findAndEnableDevices(self):
        '''
        Enables devices on robot like sensors, bumpers etc..
        '''
        self.timeStep = int(self.getBasicTimeStep())


    def messageCallback(self, channel, method, properties, body):
        '''
        The function called when a message is received by the subscriber

        This function can do anything you want:
            * call startMotion()
            * call eval(body)
            * point to an emotion-controller 

        ARGS:
        channel: pika.channel.Channel
        method: pika.spec.Basic.Deliver
        properties: pika.spec.BasicProperties
        body: bytes
        '''
        pass

    def run(self):
        '''
        Function that contains the main controller loop.

        This function should be run in a seperate thread.
        '''
        pass



    # Create general controller here (look at webots controller)
    