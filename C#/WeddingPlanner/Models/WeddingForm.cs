using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WeddingPlanner.Models
{
    public class DateInFutureAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (((DateTime)value) <= DateTime.UtcNow)
                return new ValidationResult("You must select a date in the future");
            return ValidationResult.Success;
        }
    }
    public class WeddingForm
    {
        public int WeddingId { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [DateInFuture]
        public DateTime WeddingDate { get; set; } = DateTime.UtcNow.AddYears(1);
        [Required]
        public string IdentityUserId { get; set; }
        [Required]
        public string Wedder1 { get; set; }
        [Required]
        public string Wedder2 { get; set; }
        [Required]
        public string Address { get; set; }
        public List<WeddingGuest> WeddingGuests { get; set; }
        public DateTime UpdatedDateUtc { get; set; } = DateTime.UtcNow;

        public WeddingForm()
        {
            
        }
        public WeddingForm(Wedding wedding)
        {
            this.WeddingId = wedding.WeddingId;
            this.Description = wedding.Description;
            this.Wedder1 = wedding.Wedder1;
            this.Wedder2 = wedding.Wedder2;
            this.WeddingDate = wedding.WeddingDate;
            this.UpdatedDateUtc = wedding.UpdatedDateUtc;
            this.Address = wedding.Address;
            this.IdentityUserId = wedding.IdentityUserId;
        }
    }
}
