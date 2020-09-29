using System;
using System.Collections.Generic;

namespace Boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List<object> list = new List<object>();
            list.Add(7);
            list.Add(28);
            list.Add(-1);
            list.Add(true);
            list.Add("chair");
            double num;
            double sum=0;
            foreach(var i in list)
            {
                Console.WriteLine(i);
                if (double.TryParse(i.ToString(), out num))
                {
                    sum += (double) num;
                }
            }
            Console.WriteLine($"Sum={sum}");

            Console.WriteLine("Hello World!");
        }
    }
}
