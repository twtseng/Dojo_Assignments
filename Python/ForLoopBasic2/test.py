def biggie_size(input_list: list):
    for i in range(len(input_list)):
        if input_list[i] > 0:
            input_list[i] = "big"
    return input_list

print("biggie_size([-1, 3, 5, -5])",biggie_size([-1, 3, 5, -5]))

def count_positives(input_list: list):
    count = 0
    for n in input_list:
        if n > 0:
            count += 1
    input_list[len(input_list) - 1] = count
    return input_list

print("count_positives([-1,1,1,1])", count_positives([-1,1,1,1]))

def sum_total(input_list: list):
    sum = 0
    for n in input_list:
        sum += n
    return sum

print("sum_total([1,2,3,4])", sum_total([1,2,3,4]))

def average(input_list: list):
    return sum(input_list)/len(input_list)

print("average([1,2,3,4])", average([1,2,3,4]))

def length(input_list: list):
    return len(input_list)

print("length([37,2,1,-9])", length([37,2,1,-9]))

def minimum(input_list: list):
    if len(input_list) == 0:
        return False
    return min(input_list)

print("minimum([37,2,1,-9])", minimum([37,2,1,-9]))
print("minimum([])", minimum([]))

def maximum(input_list: list):
    if len(input_list) == 0:
        return False
    return max(input_list)

print("maximum([37,2,1,-9])", maximum([37,2,1,-9]))
print("maximum([])", maximum([]))

def ultimate_analysis(input_list: list):
    sum_total = sum(input_list)
    length = len(input_list)
    avg = sum_total / length
    minimum = min(input_list)
    maximum = max(input_list)
    return {
        'sumTotal': sum_total,
        'average': avg,
        'minimum': minimum,
        'maximum': maximum,
        'length': length
    }


print("ultimate_analysis([37,2,1,-9])", ultimate_analysis([37,2,1,-9]))

def reverse_list(input_list: list):
    length = len(input_list)
    for i in range(int(length / 2)):
        temp = input_list[i]
        input_list[i] = input_list[length - i - 1]
        input_list[length - i - 1] = temp
    return input_list

print("reverse_list([37,2,1,-9])", reverse_list([37,2,1,-9]))

