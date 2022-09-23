'''
This serves as an example of a way to receive messages from the web application 
and use it to control a robot in a Webots simulator.
'''


def controller(body):
    '''This uses the Webots API to control a robot'''
    from controller import Robot

    robot = Robot()

    print("before sim loop")

    while robot.step(32) != -1:
        print(body.decode("utf-8")+"!")


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