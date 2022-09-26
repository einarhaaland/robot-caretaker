import pika


class Subscriber:
    '''
    Class that implements the subscriber logic in messaging system.

    IMPORTANT:
    The supplied callback function must be available in the file where this class is used.
    '''

    def __init__(self, exchange, routing_key, callback):
        '''
        exchange: name of exchange (str)
        routing_key: name of routing key (str)
        callback: name of callback-function (Callable)
        '''
        self.exchange = exchange
        self.routing_key = routing_key
        self.callback = callback
        

    def listener():
        # Init connection and channel
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()

        # Declare queue with unique name
        result = channel.queue_declare(queue='')
        queue_name = result.method.queue

        # Bind queue to existing exchange
        channel.queue_bind(exchange=self.exchange, queue=queue_name, routing_key=self.routing_key)

        # Listen for messages
        channel.basic_consume(queue=queue_name, on_message_callback=self.callback, auto_ack=True)
        channel.start_consuming()
        print(' [*] Listening for messages..)
        