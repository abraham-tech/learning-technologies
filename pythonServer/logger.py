#!/usr/bin/python

import sys
import datetime
import time
import os


class Logger:

    log = None

    def __init__(self):
        #self._createLog()
        pass

    def _createLog(self, message):
        now = datetime.datetime.now()
        date = now.strftime("%Y%m%d")
        writepath = '/home/pi/log.txt'

        mode = 'a' if os.path.exists(writepath) else 'w'
        print("Mode ", mode)
        with open(writepath, mode) as f:
            f.write('\n Executing at: '+now.strftime("%Y-%m-%d %H:%M:%S")+ ' \n' + message + '\n \n')



