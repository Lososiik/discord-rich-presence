import os

try:
    from pypresence import Presence

except:
    os.system('pip install pypresence')
    from pypresence import Presence

import time

def presence():
    idclient = input('Client ID: ')
    state = input('State: ')
    details = input('Details: ')
    largeimg = input('Large img: ')
    smallimg = input('Small img: ')

    try:
        RPC = Presence(idclient)
        RPC.connect()

        RPC.update(state=state, details=details, large_image=largeimg, small_image=smallimg,  start=time.time())
        print('Done...')

    except:
        print('something went wrong -_-')
        pass

    while True:
        time.sleep(5)

presence()