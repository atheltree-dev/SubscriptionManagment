using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubscriptionManagement.Models.DTO
{
    public class CompanySubscriptionDL
    {
        public string Commerical_Name { set; get; }
        public string Commerical_Name_En { set; get; }
        public int Comapny_Id { set; get; }
        public byte Status { set; get; }
        public int Rec_Id { set; get; }
        public int Subscription_Count { set; get; }
        public Guid Subscription_Id { set; get; }
        public string Subscription_Code { set; get; }
        public string Start_Date { set; get; }
        public string End_Date { set; get; }

    }
}
