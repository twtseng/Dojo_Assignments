using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using TheWall.Data;

namespace TheWall.Models
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        public int MessageId { get; set; }
        public string CommentText { get; set; }
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        public DateTime CreateTimeUtc { get; set; } = DateTime.UtcNow;
        public DateTime UpdateTimeUtc { get; set; } = DateTime.UtcNow;
        public override string ToString()
        {
            return $"CommentId: {CommentId} CommentText: {CommentText} IdentityUserId: {IdentityUserId}";
        }   
    }
}
