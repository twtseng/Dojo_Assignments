import unittest

class MathDojo:
    def __init__(self):
        self.result = 0

    def add(self, num, *nums):
        self.result += num
        for n in nums:
            self.result += n
        return self

    def subtract(self, num, *nums):
        self.result -= num
        for n in nums:
            self.result -= n
        return self


class test_MathDojo(unittest.TestCase):
    def setUp(self):
       self.md = MathDojo()
       

    def test_Add(self):
        self.md.add(1,2,3,4)
        self.assertEqual(self.md.result, 10)

    def test_Subtract(self):
        self.md.add(10)
        self.md.subtract(2,3)
        self.assertEqual(self.md.result, 5)

if __name__ == "__main__":
    unittest.main()