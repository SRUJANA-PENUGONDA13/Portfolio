import os 
import sys
import time
import psutil
import psutil
import mail

print("Thank you Srujana") 
print('getcwd:      ', os.getcwd())
os.chdir(r'./utils/gmail')
cmdargs = sys.argv
print(sys.argv)
print('getcwd:      ', os.getcwd())
mail.send_status(cmdargs[1],cmdargs[2],cmdargs[3])
print("Thank you Srujana") 
sys.stdout.flush()
