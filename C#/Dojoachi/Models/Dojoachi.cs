using System;

namespace Dojoachi.Models
{
    public class Dojoachi
    {
        public int Happiness { get; private set; }
        public int Fullness { get; private set; }
        public int Energy { get; private set; }
        public int Meals { get; private set; }
        public string Status { get; private set; }
        public Dojoachi()
        {
            this.Reset();
        }
        public void Reset()
        {
            this.Status = "You reset your Dojoachi";
            this.Happiness = 20;
            this.Fullness = 20;
            this.Energy = 50;
            this.Meals = 3;            
        }
        public bool Feed()
        {
            if (this.Meals > 0)
            {
                this.Status = "You fed your Dojoachi";
                this.Meals--;
                this.Energy += (new Random()).Next(5)+5;
                return true;
            }
            else
            {
                this.Status = "Not enought meals to feed your dojoachi";
                return false;
            }
        }
        public bool Play()
        {
            if (this.Energy >= 5)
            {
                this.Status = "You played your Dojoachi";
                this.Energy -= 5;
                this.Happiness += (new Random()).Next(5)+5;
                return true;
            }
            else
            {
                this.Status = "Not enought energy to play your dojoachi";
                return false;
            }
        }
        public bool Work()
        {
            if (this.Energy >= 5)
            {
                this.Status = "You worked your Dojoachi";
                this.Energy -= 5;
                this.Meals += (new Random()).Next(3)+1;
                return true;
            }
            else
            {
                this.Status = "Not enough energy to work your dojoachi";
                return false;
            }
        }
        public void Sleep()
        {
            this.Status = "You slept your Dojoachi";
            this.Energy += 15;
            this.Fullness -= 5;
            this.Happiness -=5;
        }
    }
}
