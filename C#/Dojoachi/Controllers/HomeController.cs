using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Dojoachi.Models;

namespace Dojoachi.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly Dojoachi.Models.Dojoachi _dojoachi;

        public HomeController(ILogger<HomeController> logger, Dojoachi.Models.Dojoachi dojoachi)
        {
            _logger = logger;
            _dojoachi = dojoachi;
        }

        public IActionResult Index()
        {
            return View(model: _dojoachi);
        }
        [HttpPost("feed")]
        public IActionResult Feed()
        {
            _dojoachi.Feed();
            return View("Index", model: _dojoachi);
        }
        [HttpPost("play")]
        public IActionResult Play()
        {
            _dojoachi.Play();
            return View("Index", model: _dojoachi);
        }
        [HttpPost("work")]
        public IActionResult Work()
        {
            _dojoachi.Work();
            return View("Index", model: _dojoachi);
        }
        [HttpPost("sleep")]
        public IActionResult Sleep()
        {
            _dojoachi.Sleep();
            return View("Index", model: _dojoachi);
        }
        [HttpPost("reset")]
        public IActionResult Reset()
        {
            _dojoachi.Reset();
            return View("Index", model: _dojoachi);
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
