using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Portfolio2.Models;

namespace Portfolio2.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            ViewBag.Name = "Joe Blow";
            ViewBag.Intro = "I like things that are fun";
            ViewBag.Bio = "I was born in Seattle and I like thunderstorms";
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Projects()
        {
            Project [] projects = new Project [] {
                 new Project(){ Title="Project1", Description="This was a fun projects"},
                 new Project(){ Title="Project2", Description="This was a not fun projects"},
                 new Project(){ Title="Project3", Description="This was a cool projects"},
                 new Project(){ Title="Project4", Description="This was a lame projects"},
            };
            ViewBag.Projects = projects;

            return View();
        }     

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
