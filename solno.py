import random
import queue
from smbus2 import SMBus
import time
import RPi.GPIO as GPIO  
RST_PIN =22
INT_PIN = 23
OE_PIN = 24
class Solenoid:
    """
    Define Solenoid test class
    """

    def __init__(self):
        pass

    
    def execute(self, floor):
        print("Floor :", floor)
        RST_PIN =22
        INT_PIN = 23
        OE_PIN = 24
        GPIO.cleanup()
        GPIO.setmode(GPIO.BCM)  
        GPIO.setwarnings(False)
        GPIO.setup(OE_PIN, GPIO.OUT)  
        GPIO.setup(RST_PIN, GPIO.OUT)   
        GPIO.setup(INT_PIN, GPIO.IN)    
        GPIO.output(OE_PIN, 0) 
        GPIO.output(RST_PIN, 0)
        time.sleep(1)
        GPIO.output(RST_PIN, 1)

        i2cbus = SMBus(1)
        i2caddress = floor
        i2cbus.write_i2c_block_data(i2caddress, 25,[0])

        i2cbus.write_i2c_block_data(i2caddress, 9,[1])
        time.sleep(1)
        i2cbus.write_i2c_block_data(i2caddress, 9,[2])
        time.sleep(1)
        i2cbus.write_i2c_block_data(i2caddress, 9,[4])
        time.sleep(1)
        i2cbus.write_i2c_block_data(i2caddress, 9,[8])
        time.sleep(1)
        i2cbus.write_i2c_block_data(i2caddress, 9,[16])
        time.sleep(1)
        i2cbus.write_i2c_block_data(i2caddress, 9,[32])
        time.sleep(1)
        i2cbus.write_i2c_block_data(i2caddress, 9,[0])
        time.sleep(1)
        
solenoid = Solenoid()

floors = [0x20, 0x21, 0x22, 0x23, 0x24, 0x25] 
for floor in floors :
    solenoid.execute(floor)