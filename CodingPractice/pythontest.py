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

print(two_number_sum(array, target_sum))