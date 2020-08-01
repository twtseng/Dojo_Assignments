def selection_sort(input_list: list):
    for i in range(len(input_list)):
        minIndex = i
        for j in range(i, len(input_list)):
            if input_list[j] < input_list[minIndex]:
                minIndex = j
        input_list[i], input_list[minIndex] = input_list[minIndex], input_list[i]
    return input_list

print('selection_sort([3,67,4,-1,4,24]): ',selection_sort([3,67,4,-1,4,24]))