import os

directory = "./photos"

i = 1

for photo in os.listdir(directory):
    f = os.path.join(directory, photo)

    if os.path.isfile(f):
        ends_with = f.split(".")[2]
        print(f"{directory}{str(i)}.{ends_with}")
        os.rename(f, f"{directory}{str(i)}.{ends_with}")
    i+=1
