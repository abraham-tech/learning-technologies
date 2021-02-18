import paho.mqtt.client as mqtt
from random import randrange, uniform 
import time

mqttBroker = "test.mosquitto.org"

client = mqtt.Client("Temprature_Inside")
client.connect(mqttBroker)


while True:
    randNumber = uniform(20, 30)
    client.publish("gronska/engine", "DOOR_LOCK_1_ON")
    time.sleep(1)
    client.publish("gronska/engine", "DOOR_LOCK_1_OFF")
    time.sleep(1)
    
    client.publish("gronska/engine/202481594000352", "GROW_LED_ON_70")
    time.sleep(1)
    client.publish("gronska/engine/202481594000352", "GROW_LED_ON_0")
    time.sleep(1)


    # print('Just published ', str(randNumber) + "to topic TEMPERATURE")
    time.sleep(1)

    
