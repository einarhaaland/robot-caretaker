import pika

'''
Publishes a message using Pika -> RabbitMQ

Queue is declared and bound to exhange in the Consumer,

ARGS:
    body:           The content to send                         (JSON)
    host:           The host of the RabbitMQ broker instance    (Str)
    routing_key:    Address where exhange routes message        (Str)
    exchange:       Name of exchange                            (Str)
    exchange_type:  "direct", "topic", "fanout", "headers"      (Str)
'''

def send(
    body, 
    host='localhost',  
    routing_key='webots', 
    exchange='routing_exchange', 
    exchange_type='fanout'
    ):

    # Init connection and channel
    connection = pika.BlockingConnection(pika.ConnectionParameters(host=host))
    channel = connection.channel()

    # Declare exchange
    channel.exchange_declare(exchange=exchange, exchange_type=exchange_type)

    # Publish message
    channel.basic_publish(exchange=exchange, routing_key=routing_key, body=body)
    print(f"Sent '{body}'")

    # Close connection
    connection.close()
