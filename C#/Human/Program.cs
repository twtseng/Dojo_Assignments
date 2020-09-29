using System;

namespace HumanTest
{
    public class Human
    {
        public Human(string name)
        {
            this.Name = name;
            this.Strength = 3;
            this.Intelligence = 3;
            this.Dexterity = 3;
            this.Health = 100;
        }
        public string Name { get; set; }
        public int Strength { get; set; }
        public int Intelligence { get; set; }
        public int Dexterity { get; set; }
        public int Health { get; private set; }
        public int Attack(int amount)
        {
            this.Health -= amount;
            return this.Health;
        }
        public override string ToString()
        {
            return $"Name: {this.Name} Strength: {this.Strength} Intelligence: {this.Intelligence} Dexterity: {this.Dexterity} Health: {this.Health}";
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Human human = new Human("Joe Blow");
            Console.WriteLine(human);
            human.Attack(50);
            Console.WriteLine(human);
        }
    }
}
