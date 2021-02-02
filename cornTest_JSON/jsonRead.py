import json
import uuid

try:
    with open('configuration.json') as json_file:
        data = json.load(json_file)
        for p in data['configurations']:
            print('Name: ' + p['name'])
            print('Light on: ' + p['light_on'])
            print('Light off: ' + p['light_off'])
            print ('watering time')
            print( p['watering'])
            #print('From: ' + p['from'])
            print('')

except:
    print("Use default configuration happend")
    data = {}
    data['configurations'] = []
    data['configurations'].append({
        'name': 'module1',
        'id':str(uuid.getnode()),
        'light_on': ['8:00','15:00','17:00'],
        'light_off': ['10:00','16:00','20:00'],
        'watering':['5:00','9:00']
    })

    with open('configuration.json', 'w') as outfile:
        json.dump(data, outfile)