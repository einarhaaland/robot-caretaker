'''
This serves as an example of a way to receive messages from the web application 
and use it to control a robot in a Webots simulator.
'''


def controller(body):
    from controller import Robot, Keyboard, Motion


    class Nao (Robot):

        # load motion files
        def loadMotionFiles(self):
            self.handWave = Motion('../../motions/HandWave.motion')
            self.nod = Motion('../../motions/Nod.motion')
            self.cheer = Motion('../../motions/Cheer.motion')
            self.shakeHead = Motion('../../motions/ShakeHead.motion')
            self.excited = Motion('../../motions/Excited.motion')
            self.thinking = Motion('../../motions/Thinking.motion')
            

        def startMotion(self, motion):
            # interrupt current motion
            if self.currentlyPlaying:
                self.currentlyPlaying.stop()

            # start new motion
            motion.play()
            self.currentlyPlaying = motion


        def findAndEnableDevices(self):
            # get the time step of the current world.
            self.timeStep = int(self.getBasicTimeStep())

            # shoulder pitch motors
            self.RShoulderPitch = self.getDevice("RShoulderPitch")
            self.LShoulderPitch = self.getDevice("LShoulderPitch")

            # keyboard
            self.keyboard = self.getKeyboard()
            self.keyboard.enable(10 * self.timeStep)

        def __init__(self):
            Robot.__init__(self)
            self.currentlyPlaying = False

            # initialize stuff
            self.findAndEnableDevices()
            self.loadMotionFiles()

        def run(self):
            while True:
                key = self.keyboard.getKey()

                if key == Keyboard.LEFT:
                    self.startMotion(self.handWave)
                elif key == ord('W'):
                    self.startMotion(self.wipeForhead)

                if robot.step(self.timeStep) == -1:
                    break


    # create the Robot instance and run main loop
    robot = Nao()
    robot.run()


def receiver():
    '''Receives messages (Frontend -> Backend -> RabbitMQ -> HERE)'''
    import pika, sys, os

    # Init connection and channel
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    # Declare queue with unique name
    result = channel.queue_declare(queue='')
    queue_name = result.method.queue

    # Bind queue to existing exchange
    channel.queue_bind(exchange='routing_exchange', queue=queue_name, routing_key='webots')

    # Listen for messages
    channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
    channel.start_consuming()
    print(' [*] Waiting for messages. To exit press CTRL+C')
    
    # On message received
    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)
        controller(body)


if __name__ == '__main__':
    try:
        receiver()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)