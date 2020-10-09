using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefsNDishes.Models;
using ChefsNDishes.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace ChefsNDishes.Controllers
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
            return View(model: _dbContext);
        }
        [HttpGet]
        public IActionResult AddChef()
        {
             _logger.LogInformation($"=== AddChef ===");
            return View();
        }
        [HttpPost]
        public IActionResult AddChefPost(Chef chef)
        {
            _logger.LogInformation($"=== AddChefPost ===");
            _dbContext.Chefs.Add(chef);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IActionResult AddDish()
        {
             _logger.LogInformation($"=== AddDish ===");
            DishFormModel dishFormModel = new DishFormModel();
            dishFormModel.Chefs = _dbContext.Chefs.ToList();
            ViewBag.Chefs = new SelectList(dishFormModel.Chefs, "ChefId", "Name");
            foreach(var chef in ViewBag.Chefs)
            {
                _logger.LogInformation($"=== AddDish Chef: {chef} ===");
            }
            return View(model: dishFormModel);
        }
        [HttpPost]
        public IActionResult AddDishPost(Dish dish)
        {
             _logger.LogInformation($"=== AddDishPost ===");
            _dbContext.Dishes.Add(dish);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }        

    }
}
