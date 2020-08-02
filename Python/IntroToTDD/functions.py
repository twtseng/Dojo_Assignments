def reverseList(input_list):
    length = len(input_list)
    halfLength = int(length/2)
    for i in range(halfLength):
        input_list[i], input_list[length-i-1] = input_list[length-i-1], input_list[i]
    return input_list
