using SubscriptionManagement.Models;
using SubscriptionManagement.Services;
using SubscriptionManagement.Services.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SubscriptionManagement.Controllers
{
    public class HomeController : Controller
    {
        private readonly IHomeService _homeService;

        //private readonly SubscriptionService _subscriptionService;

        public HomeController(IHomeService homeService)
        {
            _homeService = homeService;
            //_subscriptionService = new SubscriptionService();
        }

        public ActionResult Index()
        {
            var data = _homeService.GetAll();
            return View(data);
        }
        public ActionResult GetAllCustomerCompany()
        {
            var data = _homeService.GetAll();
            return Json(data);
        }

        [HttpGet]
        public ActionResult AddSubscription()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddSubscription(CustomersCompany SubscriptionObj)
        {
            return View();
        }




    }
}