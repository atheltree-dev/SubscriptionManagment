using SubscriptionManagement.Services.Abstraction;
using SubscriptionManagement.Services.Implementation;
using SubscriptionManagement.Models;
using SubscriptionManagement.Repositories.IRepositories;
using SubscriptionManagement.Repositories.Repositories;
using System;

using Unity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using SubscriptionManagement.Controllers;
using Unity.Injection;

namespace SubscriptionManagement
{
    /// <summary>
    /// Specifies the Unity configuration for the main container.
    /// </summary>
    public static class UnityConfig
    {
        #region Unity Container
        private static Lazy<IUnityContainer> container =
          new Lazy<IUnityContainer>(() =>
          {
              var container = new UnityContainer();
              RegisterTypes(container);
              return container;
          });

        /// <summary>
        /// Configured Unity Container.
        /// </summary>
        public static IUnityContainer Container => container.Value;
        #endregion

        public static void RegisterTypes(IUnityContainer container)
        {

            container.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
            container.RegisterType<UserManager<ApplicationUser>>();
            container.RegisterType<DbContext, ApplicationDbContext>();
            container.RegisterType<ApplicationUserManager>();
            container.RegisterType<AccountController>(new InjectionConstructor());
            // context
            container.RegisterType<CentralizedCustomers_DBEntities>();

            // repositories
            container.RegisterType<IBaseRepository, BaseRepository>();
            // entity services
            container.RegisterType<IBaseService, BaseService>();
            container.RegisterType<IHomeService, HomeService>();
            container.RegisterType<ICompanySubscriptionService, CompanySubscriptionService>();
            container.RegisterType<ISubscriptionUsersService, SubscriptionUsersService>();

        }
    }
}