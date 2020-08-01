def insertion_sort(input_list: list):
    for i in range(len(input_list)):
        swapIndex = i
        while swapIndex > 0 and input_list[swapIndex] < input_list[swapIndex - 1]:
            input_list[swapIndex] , input_list[swapIndex - 1] = input_list[swapIndex - 1], input_list[swapIndex]
            swapIndex -= 1
    return input_list

print('insertion_sort([10,7,3,-2,20,-20,6,9]):', insertion_sort([10,7,3,-2,20,-20,6,9]))