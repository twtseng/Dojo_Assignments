using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            List<string> results = new List<string>();
            return View(model: results);
        }
        [HttpGet("level_1/{queryNum}")]
        public IActionResult Level1(int queryNum)
        {
            List<string> results = new List<string>();
            switch (queryNum)
            {
                case 1:
                    _context.Leagues.Where(x => x.Name.ToLower().Contains("women")).ToList().ForEach(x => results.Add(x.Name));
                    break;
                case 2:
                    _context.Leagues.Where(x => x.Name.ToLower().Contains("hockey")).ToList().ForEach(x => results.Add(x.Name));
                    break;
                case 3:
                    _context.Leagues.Where(x => x.Name.ToLower().Contains("football") == false).ToList().ForEach(x => results.Add(x.Name));
                    break;
                case 4:
                    _context.Leagues.Where(x => x.Name.ToLower().Contains("conference")).ToList().ForEach(x => results.Add(x.Name));
                    break;
                case 5:
                    _context.Leagues.Where(x => x.Name.ToLower().Contains("atlantic")).ToList().ForEach(x => results.Add(x.Name));
                    break;
                case 6:
                    _context.Teams.Where(x => x.Location.ToLower().Contains("dallas")).ToList().ForEach(x => results.Add(x.Location + " " + x.TeamName));
                    break;
                case 7:
                    _context.Teams.Where(x => x.TeamName.ToLower().Contains("raptor")).ToList().ForEach(x => results.Add(x.Location + " " + x.TeamName));
                    break;
                case 8:
                    _context.Teams.Where(x => x.Location.ToLower().Contains("city")).ToList().ForEach(x => results.Add(x.Location + " " + x.TeamName));
                    break;
                case 9:
                    _context.Teams.Where(x => x.TeamName.ToLower().StartsWith("t")).ToList().ForEach(x => results.Add(x.Location + " " + x.TeamName));
                    break;
                case 10:
                    _context.Teams.OrderBy(x => x.Location).ToList().ForEach(x => results.Add(x.Location + " " + x.TeamName));
                    break;
                case 11:
                    _context.Teams.OrderByDescending(x => x.TeamName).ToList().ForEach(x => results.Add(x.Location + " " + x.TeamName));
                    break;
                case 12:
                    _context.Players.Where(x => x.LastName.ToLower() == "cooper").ToList().ForEach(x => results.Add(x.FirstName + " " + x.LastName));
                    break;
                case 13:
                    _context.Players.Where(x => x.FirstName.ToLower() == "joshua").ToList().ForEach(x => results.Add(x.FirstName + " " + x.LastName));
                    break;
                case 14:
                    _context.Players.Where(x => x.LastName.ToLower() == "cooper" && x.FirstName.ToLower() != "joshua").ToList().ForEach(x => results.Add(x.FirstName + " " + x.LastName));
                    break;
                case 15:
                    _context.Players.Where(x => x.FirstName.ToLower() == "alexander" || x.FirstName.ToLower() == "wyatt").ToList().ForEach(x => results.Add(x.FirstName + " " + x.LastName));
                    break;    
                default:
                    results.Add("Foo");
                    results.Add("Bar");
                    break;
            }

            return View("Level1", model: results);
        }
        [HttpGet("level_2")]
        public IActionResult Level2(int queryNum)
        {
            List<string> results = new List<string>();
            return View(model: results);
        }
        [HttpGet("level_2/{queryNum}")]
        public IActionResult Level2Query(int queryNum)
        {
            List<string> results = new List<string>();
            switch (queryNum)
            {
                case 1:
                    var leagues = _context.Leagues.Where(x => x.Name.ToLower().Contains("atlantic"));
                    foreach(var league in leagues)
                    {
                        results.Add(league.Name);
                        if (league != null && league.Teams != null)
                        {
                            foreach(var team in league.Teams)
                            {
                                results.Add(league.Name+" : "+team.TeamName);
                            }
                        }
                    }
                    break;

                default:
                    results.Add("Foo");
                    results.Add("Bar");
                    break;
            }
            return View("Level2",model: results);
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}