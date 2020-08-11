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

# print(unZip({ 'key': 3, 'and': 4, 'with': 5 }))


def isValidSubsequence(l1, l2):
    list2_index = 0
    for i in l1:
        if i == l2[list2_index]:
            list2_index += 1
        if list2_index == len(l2):
            return True
    return False
    
print(isValidSubsequence([1,2,3,4,5], [1, 3, 5]) == True)
print(isValidSubsequence([1,2,3,4,5], [1, 5, 3]) == False)
print(isValidSubsequence([1,2,3,4,5], [2,4]) == True)
print(isValidSubsequence([1,2,3,4,5], [5,4]) == False)
        