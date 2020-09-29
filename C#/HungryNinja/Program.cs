using System;
using System.Collections.Generic;

namespace HungryNinja
{
    public class Food
    {
        public Food(string name, int calories, bool isSpicy, bool isSweet)
        {
            this.Name = name;
            this.Calories = calories;
            this.IsSpicy = isSpicy;
            this.IsSweet = isSweet;
        }
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy;
        public bool IsSweet;
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
        public override string ToString()
        {
            return $"Name {Name} Calories {Calories} IsSpicy {IsSpicy} IsSweet {IsSweet}";
        }
    }
    public class Buffet
    {
        public List<Food> Menu;

        //constructor
        public Buffet()
        {
            Menu = new List<Food>()
        {
            new Food("Burger", 400, false, false),
            new Food("Taco", 300, true, false),
            new Food("Pizza", 600, true, false),
            new Food("Tamale", 200, true, false),
            new Food("Pie", 250, false, true),
            new Food("Ice Cream", 350, false, true),
        };
        }

        public Food Serve()
        {
            Random rand = new Random();
            return this.Menu[rand.Next(this.Menu.Count)];
        }
    }
    public class Ninja
    {
        public Ninja()
        {
            FoodHistory = new List<Food>();
        }
        private int calorieIntake;
        public List<Food> FoodHistory;

        // add a constructor

        // add a public "getter" property called "IsFull"

        // build out the Eat method
        public void Eat(Food item)
        {
            FoodHistory.Add(item);
            calorieIntake += item.Calories;
            Console.WriteLine($"Ate {item}, calorieIntake:{calorieIntake}");
        }
        public bool IsFull { get { return this.calorieIntake > 1500; } }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Buffet buffet = new Buffet();
            Ninja ninja = new Ninja();
            while(!ninja.IsFull)
            {
                ninja.Eat(buffet.Serve());
            }
        }
    }
}
