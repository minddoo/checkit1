import os
for x in os.listdir('assets'):
    print(f"{x} -> {x.encode('utf8')}")
