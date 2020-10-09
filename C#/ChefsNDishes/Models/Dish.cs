using System;
using System.ComponentModel.DataAnnotations;

namespace ChefsNDishes.Models
{
    public class Dish
    {
        [Key]
        public int DishId { get; set; }
        public string Name { get; set; }
        public int ChefId { get; set; }
        public Chef Chef { get; set; }
        public int Tastiness { get; set; }
        public int Calories { get; set; }
    }
}
