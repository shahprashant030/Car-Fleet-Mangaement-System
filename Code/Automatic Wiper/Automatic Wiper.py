import RPi.GPIO as GPIO
import time
from gpiozero import InputDevice

no_rain = InputDevice(18)
servoPIN = 17
GPIO.setmode(GPIO.BCM)
GPIO.setup(servoPIN, GPIO.OUT)

p = GPIO.PWM(servoPIN, 50)
p.start(2.5)

def wiper(iterations):
    for x in range(iterations):
        p.ChangeDutyCycle(7.5)
        time.sleep(0.5)
        p.ChangeDutyCycle(2.5)
        time.sleep(0.5)


while True:
    if not no_rain.is_active:
        wiper(3)
