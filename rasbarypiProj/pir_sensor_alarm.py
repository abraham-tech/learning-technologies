import RPi.GPIO as GPIO
import time

GPIO.setwarning(False)

pirPin = 7 
buzzerPin = 11
GPIO.setmode(GPIO.BOARD)

GPIO.setup(pirPin, GPIO.IN)
GPIO.setup(buzzerPin, GPIO.OUT)
GPIO.output(buzzerPin, GPIO.LOW)

def soundAlarm():
    print("sound Alarm")
    GPIO.output(buzzerPin, GPIO.HIGH)
    time.sleep(0.3)
    GPIO.output(buzzerPin, GPIO.LOW)


while True:
    input_state = GPIO.input(pirPin)
    if input_state == True:
        soundAlarm()

GPIO.cleanup();