using SubscriptionManagement.Models.DTO;
using SubscriptionManagement.Models;
using System.Threading.Tasks;
using SubscriptionManagement.Services.Abstraction;
using System.Collections.Generic;
using System;

namespace SubscriptionManagement.Services.Abstraction
{
    public interface ICompanySubscriptionService : IBaseService
    {
        IList<CompanySubscriptionDL> GetParentCompanySubscripton(int CompanyID);

        IList<Cmp_SubscriptionsDL> GetChildCompanySubscripton(Guid SubscriptionID);
        bool AddCompanySubscription(Cmp_Subscriptions ObjCmpSubscriptions);

        bool SaveCompanySubscripton(Guid SubscriptionID, int SubscriptionRecID, byte Subscriptionstatus);
    }
}
