using SubscriptionManagement.Models;
//using SubscriptionManagement.Models.DL;
using SubscriptionManagement.Services;
using SubscriptionManagement.Services.Abstraction;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SubscriptionManagement.Controllers
{
    public class CompanySubscriptionController : Controller
    {
        private readonly ICompanySubscriptionService _companySubscriptionService;
        public CompanySubscriptionController(ICompanySubscriptionService companySubscriptionService)
        {
            _companySubscriptionService = companySubscriptionService;
        }
        public ActionResult Index()
        {
            //var CompanyID = int.Parse(Request.QueryString["CompanyID"]);

            //var data = _subscriptionService.GetParentCompanySubscripton(CompanyID);

            return View();
        }
        public ActionResult GetParentCompanySubscripton(int CompanyID)
        {
            
            return Json(_companySubscriptionService.GetParentCompanySubscripton(CompanyID));
        }

        public ActionResult GetChildCompanySubscripton(Guid SubscriptionID)
        {
            return Json(_companySubscriptionService.GetChildCompanySubscripton(SubscriptionID));

        }


        [HttpGet]
        public ActionResult AddCompanySubscription()
        {
            return View();
        }
        [HttpPost]
        public ActionResult AddCompanySubscription(Cmp_Subscriptions ObjCmpSubscriptions)
        {
           // ObjCmpSubscriptions.Comapny_Id = int.Parse(Request.QueryString["CompanyID"]);
            var res = _companySubscriptionService.AddCompanySubscription(ObjCmpSubscriptions);
            return Json(res);
        }


        public ActionResult SaveCompanySubscripton(Guid SubscriptionID, int SubscriptionRecID, byte Subscriptionstatus)
        {
            var res = _companySubscriptionService.SaveCompanySubscripton(SubscriptionID, SubscriptionRecID, Subscriptionstatus);
            return Json(res);
        }

        //[HttpGet]
        //public ActionResult AddCompanySubscription()
        //{
        //    return View();
        //}
        //[HttpPost]
        //public ActionResult AddCompanySubscription(Cmp_Subscriptions ObjCmpSubscriptions)
        //{
        //    ObjCmpSubscriptions.Comapny_Id =int.Parse(Request.QueryString["CompanyID"]);
        //    var res = _subscriptionService.AddCompanySubscription(ObjCmpSubscriptions);
        //    return View();
        //}


        //public ActionResult CompanySubscription()
        //{
        //    var data = _subscriptionService.GetAllCustomerCompany();
        //    return View(data);
        //}

    }
}