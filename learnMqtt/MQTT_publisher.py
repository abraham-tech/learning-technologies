import paho.mqtt.client as mqtt
from random import randrange, uniform 
import time
import uuid

mqttBroker = "test.mosquitto.org"
address = str(uuid.getnode())

client = mqtt.Client("Temprature_Inside")
client.connect(mqttBroker)


while True:
    client.publish("gronska/devices/module/1", "DOOR_LOCK_1_ON")
    time.sleep(1)
    client.publish("gronska/devices/module/1", "DOOR_LOCK_1_OFF")
    time.sleep(1)


    client.publish("gronska/devices/module/1", "GROW_LED_ON_3_0.7")
    time.sleep(1)
    client.publish("gronska/devices/module", "GROW_LED_ON_3_0")
    time.sleep(1)




    # client.publish(f"gronska/engine/{address}", "GROW_LED_ON_70")
    # time.sleep(1)
    # client.publish(f"gronska/engine/{address}", "GROW_LED_ON_0")
    # time.sleep(1)


    print(f'Just published a topic from {address}')
    time.sleep(1)

    
