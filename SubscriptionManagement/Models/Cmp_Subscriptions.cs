//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SubscriptionManagement.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Cmp_Subscriptions
    {
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
