using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using FoodTrucks.Data;

namespace FoodTrucks.Models
{
    public class FoodTruck
    {
        [Key]
        public int FoodTruckId { get; set; }
        [Required]
        [MinLength(3)]
        public string Name { get; set; }
        [Required]
        [MinLength(3)]
        public string Category { get; set; }

        [Required]
        [MinLength(3)]
        public string Description { get; set; }
        public List<Review> Reviews { get; set; }

        public override string ToString()
        {
            return $"FoodTruckId: {FoodTruckId} Name: {Name} Category: {Category} Description: {Description}";
        }

    }
}
