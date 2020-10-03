using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers
{
    public class HomeController : Controller
    {
        List<User> users = new List<User>(){
            new User(){Name="Dog Man"},
            new User(){Name="Joe Blow"},
            new User(){Name="Chong Li"},
            new User(){Name="Doo Kim"},
            new User(){Name="Anil Sharma"},
            new User(){Name="Vix Nox"},
        };
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            string message="Here is a Message!";
            return View(model: message);
        }
        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int [] numbers=new int[] { 123,234,345,456,567,678,789};
            return View(model: numbers);
        }
        [HttpGet("users")]
        public IActionResult Users()
        {

            return View(model: users);
        }
        [HttpGet("users/{userid}")]
        public IActionResult UserPage(int userid)
        {
            return View(model: users[userid]);
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
