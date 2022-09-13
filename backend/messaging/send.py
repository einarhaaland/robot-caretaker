import pika

def send(body, host='localhost', queue='hello', routing_key='hello', exchange=''):
    '''
    Sends a message using given args
    '''

    connection = pika.BlockingConnection(pika.ConnectionParameters(host))
    channel = connection.channel()

    channel.queue_declare(queue=queue)

    channel.basic_publish(exchange=exchange, routing_key=routing_key, body=body)
    print(f"Sent '{body}'")

    connection.close()
