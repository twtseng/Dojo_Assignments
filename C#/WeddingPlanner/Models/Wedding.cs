using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId { get; set; }
        public string Description { get; set; }
        public DateTime WeddingDate { get; set; } = DateTime.UtcNow.AddYears(1);
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        public string Wedder1 { get; set; }
        public string Wedder2 { get; set; }
        public string Address { get; set; }
        public List<WeddingGuest> WeddingGuests { get; set; }
        public List<int> GuestIds {
            get {
                if (this.WeddingGuests == null) {
                    return new List<int>();
                } 
                else 
                {
                    return this.WeddingGuests.Select(x => x.WeddingGuestId).ToList();
                }
            }
        }
        public DateTime CreatedDateUtc { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedDateUtc { get; set; } = DateTime.UtcNow;
        public Wedding()
        {

        }
        public Wedding(WeddingForm form)
        {
            this.WeddingId = form.WeddingId;
            this.Description = form.Description;
            this.Wedder1 = form.Wedder1;
            this.Wedder2 = form.Wedder2;
            this.WeddingDate = form.WeddingDate;
            this.UpdatedDateUtc = form.UpdatedDateUtc;
            this.Address = form.Address;
            this.IdentityUserId = form.IdentityUserId;
        }
    }
}
