using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Security.Claims;
using TheWall.Models;
using TheWall.Data;

namespace TheWall.Controllers
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
             _logger.LogInformation($"=== Index ===");
            var user = User.FindFirst(ClaimTypes.NameIdentifier);
            if (user != null)
            {
                TempData["LoggedInUserId"] = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            }
            return View(model: _dbContext);
        }

        public IActionResult PostMessage(Message message)
        {
            _logger.LogInformation($"=== PostMessage({message}) ===");
            string userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (userId != null)
            {
                message.IdentityUserId = userId;
                _dbContext.Messages.Add(message);
                _dbContext.SaveChanges();
            }
            return RedirectToAction("Index");
        }        
        public IActionResult PostComment(Comment comment)
        {
            _logger.LogInformation($"=== PostComment({comment}) ===");
            string userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (userId != null)
            {
                comment.IdentityUserId = userId;
                _dbContext.Comments.Add(comment);
                _dbContext.SaveChanges();
            }
            return RedirectToAction("Index");
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
