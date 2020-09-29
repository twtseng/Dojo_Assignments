using System;
using System.Collections.Generic;
namespace Collections
{
    class Program
    {
        static void Main(string[] args)
        {
            int [] array1 = new int[] {0,1,2,3,4,5,6,7,8,9};
            string [] array2 = new string [] {"Tim","Martin", "Nikki", "Sara"};
            foreach(var s in array2) {
                Console.WriteLine(s);
            }
            List<bool> trueFalse = new List<bool>();
            for(int i=0; i<10; ++i) 
            {
                trueFalse.Add(i % 2 == 0);
            }
            Console.WriteLine($"trueFalse: {string.Join(',',trueFalse)}");
            List<string> iceCream = new List<string>();
            iceCream.Add("Choco");
            iceCream.Add("Strawberry");
            iceCream.Add("Van illa");
            iceCream.Add("Fudge");
            iceCream.Add("Lemon");
            iceCream.Add("Gooey");
            Dictionary<string,string> myDict = new Dictionary<string, string>();
            myDict["foo"] = "bar";
            Console.WriteLine("Hello World!");
        }
    }
}
