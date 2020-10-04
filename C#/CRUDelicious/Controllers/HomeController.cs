using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using CRUDelicious.Data;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;

        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View(model: _context.Dishes.ToList());
        }

        [HttpGet("new")]
        public IActionResult New()
        {
            return View();
        }
        [HttpPost("new")]
        public IActionResult NewPost(Dish dish)
        {
            _context.Add(dish);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet("edit/{dishId}")]
        public IActionResult EditDish(int dishId)
        {
            Dish dish = _context.Find<Dish>(dishId);
            return View("Edit", model: dish);
        }
        [HttpPost("edit/{dishId}")]
        public IActionResult UpdateDish(int dishId, Dish updatedDish)
        {
            Dish dish = _context.Find<Dish>(dishId);
            dish.Calories = updatedDish.Calories;
            dish.Chef = updatedDish.Chef;
            dish.Tastiness = updatedDish.Tastiness;
            dish.Description = updatedDish.Description;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
