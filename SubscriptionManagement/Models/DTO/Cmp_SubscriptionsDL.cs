using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubscriptionManagement.Models.DTO
{
    public class Cmp_SubscriptionsDL
    {
        public string Commerical_Name { set; get; }
        public string Commerical_Name_En { set; get; }
        public int Rec_Id { get; set; }
        public System.Guid Subscription_Id { get; set; }
        public string Subscription_Code { get; set; }
        public Nullable<int> Comapny_Id { get; set; }
        public Nullable<byte> IsGroup { get; set; }
        public Nullable<System.Guid> Parent_Id { get; set; }
        public Nullable<int> Subscription_Count { get; set; }
        public string Start_Date { get; set; }
        public string End_Date { get; set; }
        public Nullable<byte> Status { get; set; }
        public string InsUser { get; set; }
        public System.DateTime InsDate { get; set; }

    }
}
