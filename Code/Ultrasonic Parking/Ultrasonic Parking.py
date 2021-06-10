import RPi.GPIO as GPIO
import time

GPIO.setwarnings(False)

        GPIO.cleanup()

        GPIO.setmode(GPIO.BCM)

        TRIG = 4

        ECHO = 18

        Buzzer = 17

        

        GPIO.setup(TRIG,GPIO.OUT)

        GPIO.setup(ECHO,GPIO.IN)

        GPIO.setup(GREEN,GPIO.OUT)

        GPIO.setup(YELLOW,GPIO.OUT)

        GPIO.setup(RED,GPIO.OUT)

        def buzzer():

        GPIO.output(Buzzer, GPIO.HIGH)
        

        def get_distance():

        GPIO.output(TRIG, True)

        time.sleep(0.00001)

        GPIO.output(TRIG, False)

        while GPIO.input(ECHO) == False: start = time.time()

        while GPIO.input(ECHO) == True: end = time.time()

        signal_time = end-start

        distance = signal_time / 0.000058

        return distance

        while True:

        distance = get_distance()

        time.sleep(0.05)

        print(distance)

        if distance < 25:

        buzzer()
