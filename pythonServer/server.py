#!/usr/bin/env python3
"""
Very simple HTTP server in python for logging requests
Usage::
    ./server.py [<port>]
"""
from http.server import BaseHTTPRequestHandler, HTTPServer
import logging
from logger import Logger
import json

import sys
import datetime
import time
import os
import io



logger = Logger()

class S(BaseHTTPRequestHandler):
    def _set_response(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def get_by_id(self, id, objects):
        for object in objects:
            if object["id"] == id:
                return object

    def do_GET(self):
        logging.info("GET request,\nPath: %s\nHeaders:\n%s\n", str(self.path), str(self.headers))
        self._set_response( )
        data = ''
        dir_path = os.path.dirname(os.path.realpath(__file__)) + '/logs/rpi.txt'
        # with open(dir_path + '/logs/rpi.txt') as text:
        #     data = io.TextIOWrapper(text, encoding="utf8")
        with open(dir_path, 'r') as f2:
            data = f2.read()
            print(data)

        print(data)
        self.wfile.write(data.encode('utf8') )

    def do_POST(self):
        content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
        post_data = self.rfile.read(content_length) # <--- Gets the data itself
        default_configuration = {
            'name': 'module1',
            'id':'',
            'light_on': ['8:00', '11:00', '16:00'],
            'light_off': ['10:00', '13:00', '20:00'],
            'watering':['5:00','9:00'],
            'is_active':True,
            'level_status': [True, True, True, True, True],
            'time_to_water': 30,
            'time_to_fill_irrigation_tank': 100,
            'min_water_level': 30,
            'ph_max': 9.5,
            'ph_min': 5.5,
            'ec_max': 9.5,
            'ec_min': 5.5,
            'additive_pump_time': 2,
            'additive_pump_max_loop' : 3
        }
        all_configuration = {}
        logging.info("Body:\n%s\n",
                 post_data.decode('utf-8'))
        logger._createLog(post_data.decode('utf-8'))
        with open('configuration.json') as json_file:
                all_configuration = json.load(json_file)
        default_configuration['id'] = str(post_data.decode('utf-8'))
        
        config = self.get_by_id(default_configuration['id'], all_configuration['configurations'])
        if(config == None):
            all_configuration['configurations'].append(default_configuration)
            with open('configuration.json', 'w') as outfile:
                json.dump(all_configuration, outfile)
        #config = self.get_by_id(all_configuration['configurations'])

        
        self._set_response()
        self.wfile.write("POST request for {}".format(self.path).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=S, port=8080):
    logging.basicConfig(level=logging.INFO)
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    logging.info('Starting httpd...\n')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    logging.info('Stopping httpd...\n')

if __name__ == '__main__':
    from sys import argv

    if len(argv) == 2:
        run(port=int(argv[1]))
    else:
        run()