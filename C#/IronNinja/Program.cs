using System;
using System.Collections.Generic;

namespace IronNinja
{
    public interface IConsumable
    {
        string Name { get; set; }
        int Calories { get; set; }
        bool IsSpicy { get; set; }
        bool IsSweet { get; set; }
        string GetInfo();
    }

class Food : IConsumable
{
    public string Name {get;set;}
    public int Calories {get;set;}
    public bool IsSpicy {get;set;}
    public bool IsSweet {get;set;}
    public string GetInfo()
    {
        return $"{Name} (Food).  Calories: {Calories}.  Spicy?: {IsSpicy}, Sweet?: {IsSweet}";
    }
    public Food(string name, int calories, bool spicy, bool sweet)
    {
        Name = name;
        Calories = calories;
        IsSpicy = spicy;
        IsSweet = sweet;
    }
}   
class Drink : IConsumable
{
    public string Name {get;set;}
    public int Calories {get;set;}
    public bool IsSpicy {get;set;}
    public bool IsSweet {get;set;}
    
    // Implement a GetInfo Method
    // Add a constructor method
    public string GetInfo()
    {
        return "This is a drink";
    }
}   
abstract class Ninja
{
    protected int calorieIntake;
    public List<IConsumable> ConsumptionHistory;
    public Ninja()
    {
        calorieIntake = 0;
        ConsumptionHistory = new List<IConsumable>();
    }
    public abstract bool IsFull {get;}
    public abstract void Consume(IConsumable item);
}

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
