import os 
import sys
import time
import psutil
import psutil
import mail

os.chdir(r'./utils/gmail')
cmdargs = sys.argv
mail.send_status(cmdargs[1],cmdargs[2],cmdargs[3])
sys.stdout.flush()
