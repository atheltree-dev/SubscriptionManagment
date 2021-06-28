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
    public class SubscriptionUsersController : Controller
    {
        private readonly SubscriptionService _subscriptionService;
        private readonly ISubscriptionUsersService _subscriptionUsersService;


        public SubscriptionUsersController(ISubscriptionUsersService subscriptionUsersService)
        {
            _subscriptionUsersService = subscriptionUsersService;
        }
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetCompanySubscriptonUsers(int CompanyID)
        {
            return Json(_subscriptionUsersService.GetCompanySubscriptonUsers(CompanyID));
        }

        public ActionResult SaveUserSubscripton(string UserID, int UserRecID, byte Subscriptionstatus)
        {
            return Json(_subscriptionUsersService.SaveUserSubscripton(UserID, UserRecID, Subscriptionstatus));
        }


    }
}