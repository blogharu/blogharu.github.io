import os

for name in os.listdir():
    if name[0] == "r":
        continue
    if "+" in name:
        newName = name.split("+")[0].upper() + "-sharp" + name.split("+")[1]
        os.rename(name, newName)
