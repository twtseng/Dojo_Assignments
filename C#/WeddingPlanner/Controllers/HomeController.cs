using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingPlanner.Models;
using WeddingPlanner.Data;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace WeddingPlanner.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<IdentityUser> _userManager;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext dbContext, UserManager<IdentityUser> userManager)
        {
            _logger = logger;
            _dbContext = dbContext;
            _userManager = userManager;
        }

        public async Task<ActionResult> Index()
        {
            var user = User.FindFirst(ClaimTypes.NameIdentifier);
            // Make user login if they are not logged in
            if (user == null)
            {
                _logger.LogInformation("=== Index, user is null ===");
                return Redirect("/Identity/Account/Login");
            }
            else
            {
                // Update Invitations sent to this user
                string userId = user.Value;
                IdentityUser idUser = await _userManager.FindByIdAsync(userId);
                _logger.LogInformation($"=== Index, userId={userId}, email={idUser.Email} ===");
                var invitationsToRegister = _dbContext.WeddingGuests.Where(
                    x => x.InvitedEmail.ToLower() == idUser.Email.ToLower() 
                    && x.Status == WeddingGuest.StatusOptions.NotRegistered);
                bool changesMade = false;
                foreach(var invitation in invitationsToRegister)
                {
                    _logger.LogInformation($"=== Index, updating WeddingGuests id={invitation.WeddingGuestId} ===");
                    invitation.IdentityUserId = userId;
                    invitation.Status = WeddingGuest.StatusOptions.NotDecided;
                    _dbContext.WeddingGuests.Update(invitation);
                    changesMade = true;
                }
                if (changesMade)
                {
                    _dbContext.SaveChanges();
                }

                TempData["userIdFilter"] = userId;
            }
            return View(_dbContext);
        }
        public IActionResult AllWeddingsAndGuests()
        {
            return View("Index", model: _dbContext);
        }
        [HttpGet]
        public IActionResult AddWedding()
        {
            string userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _logger.LogInformation($"=== AddWedding ===");
            Wedding newWedding = new Wedding();
            newWedding.Description = "New Wedding";
            newWedding.IdentityUserId = userId;
            _dbContext.Weddings.Add(newWedding);
            _dbContext.SaveChanges();
            _logger.LogInformation($"=== AddWedding WeddingId={newWedding.WeddingId} ===");
            return View("EditWedding", model: new WeddingForm(newWedding));
        }
        [HttpGet("Home/EditWedding/{weddingId}")]
        [HttpGet("EditWedding/{weddingId}")]
        public IActionResult EditWedding(int weddingId)
        {
            _logger.LogInformation($"=== EditWedding({weddingId}) ===");
            Wedding wedding = _dbContext.Weddings.Include(x => x.WeddingGuests).Where(x => x.WeddingId == weddingId).FirstOrDefault();
            return View(model: new WeddingForm(wedding));
        }
        [HttpGet("Home/UpdateGuestStatus/{weddingId}/{status}")]
        [HttpGet("UpdateGuestStatus/{weddingId}/{status}")]
        public IActionResult UpdateGuestStatus(int weddingId, WeddingGuest.StatusOptions status)
        {
            string userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            _logger.LogInformation($"=== UpdateGuestStatus({weddingId},{userId},{status}) ===");
            WeddingGuest guest = _dbContext.WeddingGuests.Where(x => x.WeddingId == weddingId && x.IdentityUserId == userId).FirstOrDefault();
            if (guest != null)
            {
                guest.Status = status;
                _dbContext.WeddingGuests.Update(guest);
                _dbContext.SaveChanges();
            };
            
            TempData["userIdFilter"] = userId;
            return View("Index", _dbContext);
        }  
        [HttpPost]
        public IActionResult UpdateWedding(WeddingForm weddingForm)
        {
            _logger.LogInformation($"=== EditWeddingPost ===");
            TempData["WeddingToEdit"] = weddingForm.WeddingId;
            if (!ModelState.IsValid)
            {
                _logger.LogInformation($"=== EditWeddingPost MODEL STATE IS NOT VALID ===");
                return View("EditWedding", weddingForm);
            }
            _dbContext.Weddings.Update(new Wedding(weddingForm));
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult AddGuest(int WeddingId, string Email, string Description)
        {
            _logger.LogInformation($"=== AddGuest(WeddingId={WeddingId}, Email={Email}, Description={Description}) ===");
            Wedding wedding = _dbContext.Weddings.Include(x => x.WeddingGuests).Where(x => x.WeddingId == WeddingId).FirstOrDefault();
            if (!_dbContext.WeddingGuests.Any(x => x.WeddingId == WeddingId && x.InvitedEmail == Email))
            {
                _logger.LogInformation($"=== AddGuest(WeddingId={WeddingId}, Adding new guest with Email={Email}) ===");
                WeddingGuest weddingGuest = new WeddingGuest();
                weddingGuest.WeddingId = WeddingId;
                weddingGuest.InvitedEmail = Email;
                weddingGuest.GuestDescription = Description;
                _dbContext.WeddingGuests.Add(weddingGuest);
                _dbContext.SaveChanges();
            } 
            else
            {
                _logger.LogInformation($"=== AddGuest(WeddingId={WeddingId}, Guest ALREADY exists with Email={Email}) ===");
            }
            return RedirectToAction($"EditWedding", new { weddingId = WeddingId });
            //return View("EditWedding",model: new WeddingForm(wedding));
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
