import random
def randInt(min=0, max=100):
    num = random.random()
    num = num * (max - min)
    num += min
    return num

print('randInt()',randInt())
print('randInt(max=50)',randInt(max=50))
print('randInt(min=50)',randInt(min=50))
print('randInt(min=50, max=500)',randInt(min=50, max=500))
