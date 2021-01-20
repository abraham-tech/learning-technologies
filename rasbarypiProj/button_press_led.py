import RPi.GPIO as GPIO
import time 

GPIO.setwarning(False)

ledPid = 11
buttonPin = 16
GPIO.setmode(GPIO.BOARD)

GPIO.setup(ledPin GPIO.OUT)
GPIO.output(ledPin, GPIO.LOW)

GPIO.setup(buttonPin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

while True: 
    GPIO.wait_for_the_edge(buttonPin, GPIO.FALLING)
    print("Button Pressed")
    GPIO.output(ledPin, GPIO.HIGH)
    GPIO.wait_for_the_edge(buttonPin, GPIO.RISING)
    GPIO.output(ledPin, GPIO.LOW)
    time.sleep(0.3)
    GPIO.output(ledPin, GPIO.LOW)

GPIO.cleanup()