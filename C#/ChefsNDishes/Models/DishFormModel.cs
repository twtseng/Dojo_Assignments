using System;
using System.Collections.Generic;

namespace ChefsNDishes.Models
{
    public class DishFormModel
    {
        public Dish Dish { get; set; }
        public List<Chef> Chefs { get; set; }
    }
}
