using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models
{
    public class Chef
    {
        [Key]
        public int ChefId { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public List<Dish> Dishes { get; set; }
        public int NumDishes {
            get {
                if (this.Dishes != null) {
                    return this.Dishes.Count;
                }
                else
                {
                    return 0;
                }
            }
        }
        public int Age { get { return DateTime.Now.Year - this.DateOfBirth.Year; } }

    }
}
