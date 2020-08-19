class MyClass1:
    def __init__(self):
        self.value1 = "123"
        self.value2 = "234"
    def print(self):
        print(f"Value1: {self.value1} Value2: {self.value2}")

class MyClass2(MyClass1):
    def __init__(self):
        super().__init__()
        self.value3 = "345"
        self.value4 = "456"

    def print2(self):
        print(f"Value1: {self.value1} Value2: {self.value2} Value3: {self.value3} Value4: {self.value4}")

x1 = MyClass1()
x1.print()

x2 = MyClass2()
x2.print()
x2.print2()
