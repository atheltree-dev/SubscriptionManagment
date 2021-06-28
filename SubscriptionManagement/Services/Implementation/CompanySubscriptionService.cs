using SubscriptionManagement.Models.DTO;
using SubscriptionManagement.Models;
using SubscriptionManagement.Repositories.IRepositories;
using SubscriptionManagement.Services.Abstraction;
using System;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace SubscriptionManagement.Services.Implementation
{
    public class CompanySubscriptionService : BaseService, ICompanySubscriptionService
    {
        private readonly IBaseRepository _repo;
        public CompanySubscriptionService(IBaseRepository repo)
        {
            _repo = repo;
        }

        public bool AddCompanySubscription(Cmp_Subscriptions ObjCmpSubscriptions)
        {
            ObjCmpSubscriptions.InsDate = DateTime.Now; 
            ObjCmpSubscriptions.InsUser = "Test";
            ObjCmpSubscriptions.Subscription_Id = _repo.GetNewHeaderId();

            _repo.Add(ObjCmpSubscriptions);
            return _repo.SaveChanges();
        }

        public IList<Cmp_SubscriptionsDL> GetChildCompanySubscripton(Guid SubscriptionID)
        {
            return _repo.GetChildCompanySubscripton("exec dbo.GetChildCompanySubscripton '" + SubscriptionID + "'");
        }

        public IList<CompanySubscriptionDL> GetParentCompanySubscripton(int CompanyID)
        {
           return _repo.GetParentCompanySubscripton("exec dbo.sp_GetParentCompanySubscripton "+ CompanyID +"");
          
        }

        public bool SaveCompanySubscripton(Guid SubscriptionID, int SubscriptionRecID, byte Subscriptionstatus)
        {
            var CompanySubscripton =  _repo.FirstOrDefault<Cmp_Subscriptions>(x => x.Subscription_Id == SubscriptionID && x.Rec_Id == SubscriptionRecID );
            if (CompanySubscripton != null)
            {
                CompanySubscripton.Status = Subscriptionstatus;
                _repo.Update(CompanySubscripton);
            }
            return  _repo.SaveChanges();
        }
    }
}
