import paho.mqtt.client as mqtt
import time
import uuid

address = str(uuid.getnode())
def on_message(client, userdata, message):
    print("message", message.payload.decode('utf-8'))

mqttBroker = "test.mosquitto.org"

client = mqtt.Client("Smartphone")
client.connect(mqttBroker)

client.loop_start()

client.subscribe("gronska/engine/IKEA_SUB")
client.on_message=on_message

time.sleep(3000)
client.loop_stop()

