using System;
using System.Collections.Generic;
using System.Linq;

namespace Puzzles
{
    class Program
    {
        static void RandomArray()
        {
            List<int> arr = new List<int>();
            Random rand = new Random();
            for(int i=0; i < 10; ++i) 
            {
                int val = rand.Next(20) + 5;
                arr.Add(val);
            }
            Console.WriteLine($"Min: {arr.Min()} Max: {arr.Max()} Avg: {arr.Average()} Arr: {string.Join(",", arr)}");
        }
        static void CoinFlip()
        {
            List<int> arr = new List<int>();
            Random rand = new Random();
            if (rand.Next(10) > 5)
            {
                Console.WriteLine("Heads");
            }
            else
            {
                Console.WriteLine("Tails");
            }
        }
        static void Main(string[] args)
        {
            RandomArray();
            foreach(var i in Enumerable.Range(1,20))
            {
                CoinFlip();
            }
        }
    }
}
