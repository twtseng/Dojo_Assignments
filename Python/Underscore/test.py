class Underscore:
    def map(self, iterable, callback):
        # your code here
        output = []
        for x in iterable:
            output.append(callback(x))
        return output

    def find(self, iterable, callback):
        for x in iterable:
            if callback(x):
                return x
        return None

    def filter(self, iterable, callback):
        output = []
        for x in iterable:
            if callback(x):
                output.append(x)
        return output

    def reject(self, iterable, callback):
        output = []
        for x in iterable:
            if not callback(x):
                output.append(x)
        return output
# you just created a library with 4 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
print('_.map([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)',':',_.map([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
print('_.find([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)',':',_.find([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
print('_.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)',':',_.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
print('_.filter([1, 2, 3, 4, 5, 6], reject x: x % 2 == 0)',':',_.reject([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0))
# should return [2, 4, 6] after you finish implementing the code above


