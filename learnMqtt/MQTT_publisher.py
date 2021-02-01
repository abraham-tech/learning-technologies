import paho.mqtt.client as mqtt
from random import randrange, uniform 
import time

mqttBroker = "mqtt.eclipse.org"

client = mqtt.Client("Temprature_Inside")
client.connect(mqttBroker)


while True:
    randNumber = uniform(20, 30)
    client.publish("TEMPERATURE", randNumber)
    print('Just published ', str(randNumber) + "to topic TEMPERATURE")
    time.sleep(1)

    
