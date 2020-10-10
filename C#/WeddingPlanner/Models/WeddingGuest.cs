using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace WeddingPlanner.Models
{
    public class WeddingGuest
    {
        public enum StatusOptions {
            NotRegistered,
            NotDecided,
            Declined,
            Confirmed
        }
        [Key]
        public int WeddingGuestId { get; set; }
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        public int WeddingId { get; set; }
        public Wedding Wedding {get; set; }
        /// <summary>
        /// Added by wedding organizer to invite a guest. 
        /// When the guest registers, then the associated IdentityUser is set
        /// </summary>
        [Required]
        public string InvitedEmail { get; set; } 
        public string GuestDescription { get; set; }
        public DateTime CreatedDateUtc { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedDateUtc { get; set; } = DateTime.UtcNow;
        public StatusOptions Status { get; set; } = WeddingGuest.StatusOptions.NotRegistered;
    }
}
