import pika


class Subscriber:
    '''
    Class that implements the subscriber logic in the messaging system.
    '''

    def __init__(self, exchange, routing_key, callback, exchange_type='fanout',):
        '''
        ARGS:
            * exchange: name of exchange (str)
            * routing_key: name of routing key (str)
            * callback: name of callback-function (Callable)
        '''
        self.exchange = exchange
        self.routing_key = routing_key
        self.callback = callback
        self.exchange_type = exchange_type
        

    def listener(self):
        # Init connection and channel
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()

        # Declare exchange (needed because listener will run before any message is sent)
        channel.exchange_declare(exchange=self.exchange, exchange_type=self.exchange_type)

        # Declare queue with unique name
        result = channel.queue_declare(queue='')
        queue_name = result.method.queue

        # Bind queue to existing exchange
        channel.queue_bind(exchange=self.exchange, queue=queue_name, routing_key=self.routing_key)

        # Listen for messages
        channel.basic_consume(queue=queue_name, on_message_callback=self.callback, auto_ack=True)
        print(' [*] Listening for messages..')
        channel.start_consuming()
        