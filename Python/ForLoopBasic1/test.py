
# Basics
for i in range(0,151):
    print(i)

# Multiples of Five
for i in range(5,1001,5):
    print(i)

#Counting dojo way
for i in range(1,101):
    if i % 10 == 0:
        print('Coding Dojo')
    elif i % 5 == 0:
        print('Coding')
    else:
        print(i)

#Whoa. That Sucker's Huge
sum = 0
for i in range(1,500001,2):
    sum += i
print(sum)

#Countdown by Fours
for i in range(2018,0,-4):
    print(i)

#Flexible Counter
lowNum = 2
highNum = 9
mult = 3
for i in range(lowNum, highNum+1):
    if i % mult == 0:
        print(i)