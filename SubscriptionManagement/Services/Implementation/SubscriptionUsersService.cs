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
    public class SubscriptionUsersService : BaseService, ISubscriptionUsersService
    {
        private readonly IBaseRepository _repo;

        public SubscriptionUsersService(IBaseRepository repo)
        {
            _repo = repo;
        }

        public IList<CompanySubscriptionUsersDL> GetCompanySubscriptonUsers(int CompanyID)
        {
            return _repo.GetCompanySubscriptonUsers("exec dbo.sp_GetCompanySubscriptonUsers " + CompanyID + "");
        }

        public bool SaveUserSubscripton(string UserID, int UserRecID, byte Subscriptionstatus)
        {
            var UserSubscripton = _repo.FirstOrDefault<Asp_UserSubscriptions>(x => x.UserId == UserID && x.Rec_Id == UserRecID);
            if (UserSubscripton != null)
            {
                UserSubscripton.Subsc_Status = Subscriptionstatus;
                _repo.Update(UserSubscripton);
            }
            return _repo.SaveChanges();
        }
    }
}
