using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace BankAccount.Models
{
    public class Account
    {
        [Key]
        public int AccountId { get; set; }
        public string IdentityUserId { get; set; }
        public IdentityUser IdentityUser { get; set; }
        public int Balance { 
            get { 
                if (this.Transactions == null)
                {
                    return 0;
                }
                else
                {
                    return this.Transactions.Sum(x => x.Amount);
                }
            } 
        }
        public List<Transaction> Transactions { get; set; }
    }
}
