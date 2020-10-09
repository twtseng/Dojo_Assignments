using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace BankAccount.Models
{
    public class Transaction
    {
        [Key]
        public int TransactionId { get; set; }

        public int AccountId { get; set; }
        
        public int Amount { get; set; }
    }
}
