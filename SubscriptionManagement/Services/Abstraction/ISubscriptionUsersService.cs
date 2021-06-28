using SubscriptionManagement.Models.DTO;
using SubscriptionManagement.Models;
using System.Threading.Tasks;
using SubscriptionManagement.Services.Abstraction;
using System.Collections.Generic;

namespace SubscriptionManagement.Services.Abstraction
{
    public interface ISubscriptionUsersService : IBaseService
    {
        IList<CompanySubscriptionUsersDL> GetCompanySubscriptonUsers(int CompanyID);

        bool SaveUserSubscripton(string UserID, int UserRecID, byte Subscriptionstatus);


    }
}
