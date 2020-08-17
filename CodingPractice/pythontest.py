def create_dict(li1,li2):
    new_dict = {}
    for i in range(len(li1)):
        new_dict[li1[i]] = li2[i]
    return new_dict

array = [3,5,-4,8,11,1,-1,6, 4]
target_sum = 10

import itertools
def two_number_sum(array, target_sum):
    return [[x[0], x[1]] for x in itertools.combinations(array, 2) if sum(x) == target_sum]

#print(two_number_sum(array, target_sum))

def unZip(dict):
    l1 = []
    l2 = []
    for key in dict:
        l1.append(key)  # put keys into l2
        l2.append(dict[key])  # put values into l1
    return [l1,l2]



# Given a number of staircase steps = n
# If you can take 1, 2, or 3 steps at a time,
# How many different ways are there to walk up the stairs to reach the top?
# 
# 
# Sample input 
# staircase_steps(n=3, steps=[1,2,3])
# output:
# [1,1,1]
# [3]
# [1,2]
# [2,1] 


def staircase_steps(n, steps):
    matches = []
    def recurse_steps(n, steps, step_list):
        for step in steps:
            new = step_list[:]
            new.append(step)
            if sum(new) == n:
                matches.append(new)
            elif sum(new) < n:
                recurse_steps(n, steps, new)
    recurse_steps(n, steps, [])
    return matches        
            
#print(staircase_steps(n=3, steps=[1,2,3]))            

# missing_number("101112131416") should return 15
# If no match, or more than 1 missing, return -1
def missing_number(input_string):
    # The max number size is half of the length, since the minimum possible items is 2, with the middle element missing
    possible_starting_numbers = []
    for i in range(1, len(input_string)//2):
        possible_starting_numbers.append(int(input_string[0:i]))
    for starting_number in possible_starting_numbers:
        missing_number = starting_number+1
        max_missing_number = starting_number + (len(input_string)//len(str(starting_number)))
        while missing_number < max_missing_number:
            number_string = str(starting_number)
            for i in range(starting_number+1, max_missing_number+1):
                if i != missing_number:
                    number_string += str(i)
                if number_string == input_string:
                    return missing_number
            missing_number += 1
    return -1

# print("101112131416: ",missing_number("101112131416"))
# print("1011121416: ",missing_number("1011121416"))
# print("123124126127: ",missing_number("123124126127"))
# print("123124125126127: ",missing_number("123124125126127"))


def missing_chris(input):
    for i in range(1, len(input)//2):
        # Build array of complete list
        new = [input[:i]]
        j = int(new[0])
        # Once we are longer than the inputlist, we stop adding items
        while len("".join(new)) < len(input) + i:
            j += 1
            new.append(str(j))
        # Go through the list, popping elements and comparing to inputstring
        for k in range(1, len(new)-1):
            missing = new.pop(k)
            if "".join(new) == input:
                return missing
            new.insert(k,missing)
    return -1
# print(missing_chris("9899100102"))

def get_missing_value(arr):
    value_dict = {}
    maxval = 0
    for x in arr:
        if x > maxval:
            maxval = x
        value_dict[x] = True
    for i in range(0, maxval+1):
        if i not in value_dict:
            return i
    return None

def sorted(my_list):
    my_list.sort()
    for i in range(len(my_list)):
        if my_list[i] != i:
            return i
    return None

def repeat_count2(arr):
    my_dict = {}
    for x in arr:
        if x not in my_dict:
            my_dict[x] = 1
        else:
            my_dict[x] += 1
    return my_dict 

print(repeat_count2([1,1,1,1,2,2,2,3,3]))