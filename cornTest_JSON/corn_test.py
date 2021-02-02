#!/usr/bin/python

import sys
import datetime
import time
import os


class Cron_logger:

    log = None

    def __init__(self):
        #self._createLog()
        pass

    def _createLog(self, message):
        now = datetime.datetime.now()
        date = now.strftime("%Y%m%d")
        #fileName = '/home/pi/Desktop/cornTest/logCron'+date+'.txt'
        fileName = './'+date+'.txt'

        if os.path.isfile(fileName):
            self.log = open(fileName, 'a')
        else:
            self.log = open(fileName, 'w+')

        self.log.write('\n Executing at: '+now.strftime("%Y-%m-%d %H:%M:%S")+ ' \n' + message + '\n \n' )


