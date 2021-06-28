using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SubscriptionManagement.Models.DTO
{
    public class CompanySubscriptionUsersDL
    {
        public string Commerical_Name { set; get; }
        public string Commerical_Name_En { set; get; }
        public int CompanySubcr_Id { set; get; }
        public string UserId { set; get; }
        public int Rec_Id { set; get; }
        public string Full_Name { set; get; }
        public string UserName { set; get; }
        public string Email { set; get; }
        public byte Subsc_Status { set; get; }

    }
}
