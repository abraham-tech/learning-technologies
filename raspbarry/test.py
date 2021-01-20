from smbus2 import SMBus
import time
import RPi.GPIO as GPIO            # import RPi.GPIO module  
RST_PIN =22
INT_PIN = 23
OE_PIN = 24
def board_reset():
    GPIO.output(RST_PIN, 0)
    time.sleep(2)
    GPIO.output(RST_PIN, 1)
    i2cbus.write_i2c_block_data(i2caddress, 25,[0])
    c = i2cbus.read_i2c_block_data(i2caddress, 25,1)
def init_pins():
    GPIO.setmode(GPIO.BCM)             # choose BCM or BOARD  
    GPIO.cleanup()
    GPIO.setup(OE_PIN, GPIO.OUT)           # set GPIO24 as an output 
    GPIO.setup(RST_PIN, GPIO.OUT)           # set GPIO24 as an output 
    GPIO.setup(INT_PIN, GPIO.IN)           # set GPIO24 as an output   
    GPIO.output(OE_PIN, 0)         # set GPIO24 to 1/GPIO.HIGH/True
    GPIO.output(RST_PIN, 0)
    time.sleep(1)
    GPIO.output(RST_PIN, 1)
init_pins()
i2cbus = SMBus(1)
i2caddress = 0x20
# output mode for IO_1
i2cbus.write_i2c_block_data(i2caddress, 25,[0])
c = i2cbus.read_i2c_block_data(i2caddress, 25,1)
x = 0
#i2cbus.write_i2c_block_data(i2caddress, 9,[x])
#c = i2cbus.read_i2c_block_data(i2caddress, 9,1)
while True:
    c = i2cbus.read_i2c_block_data(i2caddress, 0,1)
    print("SENSOR")
    print(bin(c[0]))
    i2cbus.write_i2c_block_data(i2caddress, 9,[x])
    c = i2cbus.read_i2c_block_data(i2caddress, 9,1)
    print("SOLINOID")
    print(bin(c[0]))
    x = x | x << 1
    if x > 128:
        x = 0
    elif x == 0:
        board_reset()
        x = 1
    time.sleep(1)
