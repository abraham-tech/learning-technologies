import json

data = {}
data['configurations'] = []
data['configurations'].append({
    'name': 'module1',
    'id':'1219374348573634',
    'light_on': '8:00',
    'light_off': '20:00',
    'watering':['5:00','9:00']
})
data['configurations'].append({
    'name': 'module2',
    'id':'13451345234623462',
    'light_on': '8:00',
    'light_off': '20:00',
    'watering':['5:00','9:00']
})
data['configurations'].append({
    'name': 'module3',
    'id':'5632342344534553456',
    'light_on': '8:00',
    'light_off': '20:00',
    'watering':['5:00','9:00']
})

with open('configuration.json', 'w') as outfile:
    json.dump(data, outfile)