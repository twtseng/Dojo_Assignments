using System;

namespace CodingPractice
{
    class Program
    {
        static void Main(string[] args)
        {
            int [] myarray = new int[] {1,2,3,4,5};
            (myarray[0], myarray[4]) = (myarray[4], myarray[0]);
            Console.WriteLine($"array: {string.Join(",",myarray)}");
        }
    }
}
