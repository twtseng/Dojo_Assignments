using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using FoodTrucks.Data;

namespace FoodTrucks.Models
{
    public class Review
    {
        // NOTE: Composite key FoodTruckId, IdentityUserId defined in ApplicationDbContext.OnModelCreating
        [Required]
        public int FoodTruckId { get; set; }
        [Required]
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        [Required]
        [MinLength(3)]
        public string ReviewText { get; set; }
        public FoodTruck FoodTruck { get; set; }
        public override string ToString()
        {
            return $"FoodTruckId: {FoodTruckId} IdentityUserId: {IdentityUserId} ReviewText: {ReviewText}";
        }
        
    }
}
