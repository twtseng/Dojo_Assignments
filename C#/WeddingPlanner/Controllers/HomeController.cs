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

namespace WeddingPlanner.Controllers
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
            return View(_dbContext);
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
        [HttpGet("EditWedding/{weddingId}")]
        public IActionResult EditWedding(int weddingId)
        {
            _logger.LogInformation($"=== EditWedding({weddingId}) ===");
            Wedding wedding = _dbContext.Weddings.Find(weddingId);
            return View(model: new WeddingForm(wedding));
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
