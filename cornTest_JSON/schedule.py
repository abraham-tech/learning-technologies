from crontab import CronTab

cron = CronTab(user='pi')

cron.remove_all()

#GROWING LIGHT SCHEDULE

job = cron.new(command='python3 /home/pi/Desktop/cornTest/corn_test.py',comment='Corn test')
job.minute.every(1)
#job.hour.on(16)
#job.hour.on(20, 21, 22, 23)
#job2 = cron.new(command='python3 /home/pi/Desktop/GronskaAb/schedule/script_turn_off_growing_light.py'$
#job2.minute.every(1)

#WATERING SCHEDULE 

#job3 = cron.new(command='python3 /home/pi/Desktop/GronskaAb/schedule/script_watering.py',comment='Water$
#job3.minute.every(1)

for item in cron:
    print( item )

#job.clear()

#cron.remove_all()

cron.write()

