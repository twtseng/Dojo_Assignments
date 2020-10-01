using System;
using System.Collections.Generic;
using System.Linq;

namespace WizardNinjaSamurai
{
    public class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;

        public int Health
        {
            get { return health; }
        }

        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }

        public Human(string name, int str, int intel, int dex, int hp)
        {
            Name = name;
            Strength = str;
            Intelligence = intel;
            Dexterity = dex;
            health = hp;
        }

        // Build Attack method
        virtual public int Attack(Human target)
        {
            int dmg = Strength * 3;
            target.health -= dmg;
            Console.WriteLine($"{Name} attacked {target.Name} for {dmg} damage!");
            return target.health;
        }
        public override string ToString()
        {
            return $"{this.GetType().ToString()} Name:{Name} Strength:{Strength} Intelligence:{Intelligence} Dexterity:{Dexterity} health:{health}";
        }
    }
    public class Wizard : Human
    {
        public Wizard(string name, int str, int dex, int intel=25, int hp=50) 
        : base (name, str, intel, dex, hp)
        {
        }
        public override int Attack(Human target)
        {
            Console.WriteLine("Wizard attack");
            return base.Attack(target);
        }
    }
    public class Ninja : Human
    {
        public Ninja(string name, int str, int intel, int hp, int dex=75) 
        : base (name, str, intel, dex, hp)
        {
        }
        public override int Attack(Human target)
        {
            Console.WriteLine("Ninja attack");
            return base.Attack(target);
        }
    }
    public class Samurai : Human
    {
        public Samurai(string name, int str, int dex, int intel, int hp=200) 
        : base (name, str, intel, dex, hp)
        {
        }
        public override int Attack(Human target)
        {
            Console.WriteLine("Samurai attack");
            return base.Attack(target);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            List<Human> humans = new List<Human>();
            humans.Add(new Wizard("Warren",123,234));
            humans.Add(new Ninja("Nan", 321,321,432));
            humans.Add(new Samurai("Sammy", 100, 200, 300));
            foreach(Human h in humans)
            {
                Console.WriteLine(h);
                h.Attack(h);
            }
        }
    }
}
