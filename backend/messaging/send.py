import pika

'''
This is just a test file to ensure that the messaging system works as intended.
'''

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.queue_declare(queue='hello')

channel.basic_publish(exchange='', routing_key='hello', body='Hello World!')
print("Sent 'Hello World!'")

connection.close()
