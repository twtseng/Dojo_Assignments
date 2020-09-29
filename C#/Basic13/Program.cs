using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> oneTo255 = new List<int>();
            List<int> odds = new List<int>();
            for(int i=1; i <= 255; ++i) 
            {
                oneTo255.Add(i);
                if (i % 2 == 1)
                {
                    odds.Add(i);
                }
            }
            Console.WriteLine($"oneTo255: {string.Join(",", oneTo255)}");
            Console.WriteLine($"odds: {string.Join(",", odds)}");
        }
    }
}
