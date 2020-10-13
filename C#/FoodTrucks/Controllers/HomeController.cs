using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FoodTrucks.Models;
using FoodTrucks.Data;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;


namespace FoodTrucks.Controllers
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
            var user = User.FindFirst(ClaimTypes.NameIdentifier);
            if (user != null)
            {
                TempData["LoggedInUserId"] = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            }
            _logger.LogInformation($"=== Index ===");
            return View(_dbContext);
        }
        [HttpGet]
        public IActionResult SortTrucks(string sort)
        {
            _logger.LogInformation($"=== SortTrucks {sort} ===");
            TempData["SortTrucks"] = sort;
            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult AddFoodTruck(FoodTruck foodTruck)
        {
            _logger.LogInformation($"=== AddFoodTruck {foodTruck} ===");
            if (!ModelState.IsValid)
            {
                _logger.LogInformation($"=== AddFoodTruck MODEL STATE IS NOT VALID ===");
                return View("Index", model: _dbContext);
            }
            _dbContext.FoodTrucks.Add(foodTruck);
            _dbContext.SaveChanges();
            TempData["SelectedTruckId"] = foodTruck.FoodTruckId;
            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult AddReview(Review review)
        {
            _logger.LogInformation($"=== AddReview {review} ===");
            TempData["SelectedTruckId"] = review.FoodTruckId;
            var user = User.FindFirst(ClaimTypes.NameIdentifier);
            string userId = "";
            if (user != null)
            {
                userId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                TempData["LoggedInUserId"] = userId;
            }
            if (_dbContext.Reviews.Any(x => x.FoodTruckId == review.FoodTruckId && x.IdentityUserId == userId))
            {
                ModelState.AddModelError("ReviewText","You already submitted a review for this food truck!");
            }

            if (!ModelState.IsValid)
            {
                _logger.LogInformation($"=== AddReview MODEL STATE IS NOT VALID ===");
                return View("Index", model: _dbContext);
            }
            _dbContext.Reviews.Add(review);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        public IActionResult SelectTruck(int foodTruckId)
        {
            TempData["SelectedTruckId"] = foodTruckId;
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
