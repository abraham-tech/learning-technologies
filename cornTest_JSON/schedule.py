from crontab import CronTab
import json
import uuid

#cron = CronTab(user='pi')
#cron.remove_all()

configuration = {}
try:
    with open('configuration.json') as json_file:
        configuration = json.load(json_file)

except:
    print("Use default configuration happend")
    configuration = {}
    configuration['configurations'] = []
    configuration['configurations'].append({
        'name': 'module1',
        'id':str(uuid.getnode()),
        'light_on': ['8:00','15:00','17:00'],
        'light_off': ['10:00','16:00','20:00'],
        'watering':['5:00','9:00']
    })

    with open('configuration.json', 'w') as outfile:
        json.dump(configuration, outfile)

light_on = configuration['configurations'][0]['light_on']
light_off = configuration['configurations'][0]['light_off']
watering = configuration['configurations'][0]['watering']



def generate_corn_hour(hours):
    corn_watering = ''
    for i , time in enumerate(hours):
        if(i == 0 ):
            corn_watering =  time.split(':')[0]
        else :
            corn_watering = corn_watering + ',' + time.split(':')[0] 
    
    return corn_watering

print(generate_corn_hour(light_on), generate_corn_hour(light_off), generate_corn_hour(watering))


#GROWING LIGHT SCHEDULE

#job = cron.new(command='python3 /home/pi/Desktop/cornTest/corn_test.py',comment='Corn test')
#job.setall('29 7 * * *')

#job2 = cron.new(command='python3 /home/pi/Desktop/GronskaAb/schedule/script_turn_off_growing_light.py', comment='Turn off growing light')
#job2.setall('0 {} * * *'.format(generate_corn_hour(light_off)))

#job2 = cron.new(command='python3 /home/pi/Desktop/GronskaAb/schedule/script_turn_on_growing_light.py', comment='Turn on growing light')
#job2.setall('0 {} * * *'.format(generate_corn_hour(light_on)))

#WATERING SCHEDULE 

#job3 = cron.new(command='python3 /home/pi/Desktop/GronskaAb/schedule/script_watering.py', comment='Watering schedule')
#job2.setall('0 {} * * *'.format(generate_corn_hour(corn_watering)))

#for item in cron:
#    print( item )

#job.clear()

#cron.remove_all()

#cron.write()


