'''
This serves as an example of a way to receive messages from the web application 
and use it to control a robot in a Webots simulator.
'''


def controller(body):
    '''This uses the Webots API to control a robot'''
    from controller import Robot

    robot = Robot()

    while robot.step(32) != -1:
        print(body.decode("utf-8")+"!")


def receiver():
    '''Receives messages (Frontend -> Backend -> RabbitMQ -> HERE"""  """)'''
    import pika, sys, os

    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='hello')

    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)
        controller(body)

    channel.basic_consume(queue='hello', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

if __name__ == '__main__':
    try:
        controller(b"heisann")
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)