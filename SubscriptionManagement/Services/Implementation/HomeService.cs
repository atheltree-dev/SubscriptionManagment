using SubscriptionManagement.Models.DTO;
using SubscriptionManagement.Models;
using SubscriptionManagement.Repositories.IRepositories;
using SubscriptionManagement.Services.Abstraction;
using System;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace SubscriptionManagement.Services.Implementation
{
    public class HomeService : BaseService<CustomersCompany>, IHomeService
    {
      
        public HomeService(IBaseRepository repo):base(repo)
        {
            
        }

    }
}
