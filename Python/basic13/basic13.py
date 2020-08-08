import statistics

def print_1To255():
    for i in range(1,256):
        print(i)

#print_1To255()

def print_odds_1_to_255():
    for i in range(1,256,2):
        print(i)

# print_odds_1_to_255()

def print_ints_and_sum_255():
    sum = 0
    for i in range(0,256):
        sum += i
        print(f"i={i} sum={sum}")

# print_ints_and_sum_255()

def iterate_and_print_array(arr):
    for n in arr:
        print(n)

# iterate_and_print_array([1,234,456,567])

def print_max_of_array(arr):
    print(max(arr))

# print_max_of_array([1,234,456,567])


def print_average(arr):
    print(statistics.mean(arr))

# print_average([1,2,3,4,5,6,7,8,9])

def array_with_odds():
    arr = []
    for i in range(1, 256, 2):
        arr.append(i)
    return arr

# print(array_with_odds())
 
def square_the_values(arr):
    for i in range(len(arr)):
        arr[i] = arr[i]*arr[i]
    return arr

# print(square_the_values([1,2,3,4,5]))

def greater_than_y(arr,y):
    count = 0
    for i in arr:
        if i > y:
            count += 1
    return count

# print(greater_than_y([1,2,3,4,5],3))

def zero_out_negatives(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] = 0
    return arr

# print(zero_out_negatives([1,2,3,-4,5,6,7,-8,9]))

def max_min_average(arr):
    print(f"max: {max(arr)} min:{min(arr)} avg:{statistics.mean(arr)}")

# max_min_average([1,2,3,4,5,6,7,8,9])

def shift_array_values(arr):
    for i in range(len(arr)):
        if i < len(arr)-1:
            arr[i] = arr[i+1]
        else:
            arr[i] = 0
    return arr

# print(shift_array_values([1,2,3,4,5,6,7,8,9]))

def string_for_negatives(arr):
    for i in range(len(arr)):
        if arr[i] < 0:
            arr[i] = 'dojo'
    return arr

# print(string_for_negatives([1,2,3,-4,5,6,7,-8,9]))

def wordLen(arr):
    for i in range(len(arr)):
        arr[i] = len(arr[i])
    return arr

# print(wordLen(['hello', 'world']))

class FooClass:
    first_name = "Joe"
    last_name = "Blow"

    def change_name(self, fname, lname):
        self.first_name = fname
        self.last_name = lname

    def display(self):
        print(f"FooClass: FirstName:{self.first_name} LastName:{self.last_name}")

x = FooClass()
x.display()
x.change_name("Jane","Brain")
x.display()