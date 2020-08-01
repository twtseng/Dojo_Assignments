def countdown(n):
    return list(range(n, -1, -1))

print('countdown(10)', countdown(10))

def print_and_return(input_list: list):
    print(input_list[0])
    return input_list[1]

print('print_and_return([1,2])', print_and_return([1,2]))



def first_plus_length(input_list: list):
    return input_list[0] + len(input_list)

print('first_plus_length([1,2,3,4,5])', first_plus_length([1,2,3,4,5]))

def value_greater_than_second(input_list: list):
    if len(input_list) < 2:
        return False
    new_list = list(filter(lambda x: x > input_list[1], input_list))
    print(len(new_list))
    return new_list

print('value_greater_than_second([1,2,3,4,5])', value_greater_than_second([1,2,3,4,5]))

def this_length_that_value(length: int, value: int):
    return list(map(lambda x: value, range(length)))

print('this_length_that_value(5,7)', this_length_that_value(5,7))
