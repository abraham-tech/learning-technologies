#!/usr/bin/python

import sys
import datetime
import time
import os


class cronTest:

    log = None

    def __init__(self):
        self._createLog()


    def _createLog(self):
        now = datetime.datetime.now()
        date = now.strftime("%Y%m%d")
        fileName = '/home/pi/Desktop/cornTest/logCron'+date+'.txt'

        if os.path.isfile(fileName):
            self.log = open(fileName, 'a')
        else:
            self.log = open(fileName, 'w+')

        self.log.write('Executing at: '+now.strftime("%Y-%m-%d %H:%M:%S")+'..........\n')


    def _writeToFile(self, text):
        if text:
            print (text)
            self.log.write(text + '\n')
            self.log.close()

schedule = cronTest()

schedule._writeToFile('I was written!!')
