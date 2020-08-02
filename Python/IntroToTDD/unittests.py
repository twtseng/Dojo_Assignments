import unittest
from functions import *

class my_unit_tests(unittest.TestCase):
    def test_reverseList(self):
        self.assertEqual([1,2,3,4,5], reverseList([5,4,3,2,1]))
    def test_reverseList2(self):
        self.assertEqual([2,4,6,8], reverseList([8,6,4,2]))    
    def test_reverseList3(self):
        self.assertNotEqual([2,4,6,7], reverseList([8,6,4,2]))        


if __name__ == '__main__':
    unittest.main()