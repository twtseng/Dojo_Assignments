using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using TheWall.Data;

namespace TheWall.Models
{
    public class Message
    {
        [Key]
        public int MessageId { get; set; }
        public string MessageText { get; set; }
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        public List<Comment> Comments { get; set; }
        public DateTime CreateTimeUtc { get; set; } = DateTime.UtcNow;
        public DateTime UpdateTimeUtc { get; set; } = DateTime.UtcNow;
        public override string ToString()
        {
            return $"MessageId: {MessageId} MessageText: {MessageText} IdentityUserId: {IdentityUserId}";
        }    
    }
}
