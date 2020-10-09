using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BankAccount.Models;
using BankAccount.Data;
using System.Security.Claims;

namespace BankAccount.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _dbContext;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        public IActionResult Index()
        {
            try
            {
                string userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

                // Create account if does not already exist
                Account account = _dbContext.Accounts.Where(account => account.IdentityUserId == userId).FirstOrDefault();
                if (account == null)
                {
                    account = new Account();
                    account.IdentityUserId = userId;
                    _dbContext.Accounts.Add(account);
                    _dbContext.SaveChanges();
                }
            }
            catch(Exception ex) 
            {

            }
            return View(model: _dbContext);
        }
        [HttpPost("AddTransaction")]
        public IActionResult AddTransaction(Transaction transaction)
        {
            string userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _logger.LogInformation($"=== HomeController.AddTransaction, userId={userId} amount={transaction.Amount}===");
            Account account = _dbContext.Accounts.Where(account => account.IdentityUserId == userId).FirstOrDefault();
            if (account == null)
            {
                account = new Account();
                account.IdentityUserId = userId;
                _dbContext.Accounts.Add(account);
                _dbContext.SaveChanges();
            }            
            transaction.AccountId = account.AccountId;
            _dbContext.Transactions.Add(transaction);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
