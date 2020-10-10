using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsAndCategories.Models;
using ProductsAndCategories.Data;

namespace ProductsAndCategories.Controllers
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
            return View(model: _dbContext);
        }
        [HttpGet("EditProduct/{productId}")]
        public IActionResult EditProduct(int productId)
        {
            _logger.LogInformation($"=== EditProduct({productId}) ===");
            TempData["ProductToEdit"] = productId;
            return RedirectToAction("Index");
        }
        [HttpPost("EditProductPost")]
        public IActionResult EditProductPost(ProductForm productForm)
        {
            _logger.LogInformation($"=== EditProductPost({productForm}) ===");
            var oldAssociations  = _dbContext.Associations.Where(x => x.ProductId == productForm.ProductId);
            _dbContext.Associations.RemoveRange(oldAssociations);
            foreach(int categoryId in productForm.CategoryIds)
            {
                Association newAssociation = new Association();
                newAssociation.ProductId = productForm.ProductId;
                newAssociation.CategoryId = categoryId;
                _dbContext.Associations.Add(newAssociation);
            }
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet("EditCategory/{categoryId}")]
        public IActionResult EditCategory(int categoryId)
        {
            _logger.LogInformation($"=== EditCategory({categoryId}) ===");
            TempData["CategoryToEdit"] = categoryId;
            return RedirectToAction("Index");
        }
        [HttpPost("EditCategoryPost")]
        public IActionResult EditCategoryPost(CategoryForm categoryForm)
        {
            _logger.LogInformation($"=== EditCategoryPost({categoryForm}) ===");
            var oldAssociations  = _dbContext.Associations.Where(x => x.CategoryId == categoryForm.CategoryId);
            _dbContext.Associations.RemoveRange(oldAssociations);
            foreach(int productId in categoryForm.ProductIds)
            {
                Association newAssociation = new Association();
                newAssociation.ProductId = productId;
                newAssociation.CategoryId = categoryForm.CategoryId;
                _dbContext.Associations.Add(newAssociation);
            }
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        } 
        [HttpPost]
        public IActionResult AddProduct(Product product)
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpPost]
        public IActionResult AddCategory(Category category)
        {
            _dbContext.Categories.Add(category);
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
