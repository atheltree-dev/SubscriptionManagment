using SubscriptionManagement.Models;
//using SubscriptionManagement.Models.DL;
using SubscriptionManagement.Models.DTO;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace SubscriptionManagement.Services
{
    public class SubscriptionService
    {
        private readonly CentralizedCustomers_DBEntities _db;

        public SubscriptionService()
        {
            _db = new CentralizedCustomers_DBEntities();
        }
        public List<CompanySubscriptionDL> GetParentCompanySubscripton(int CompanyID)
        {

            List<CompanySubscriptionDL> objectList = new List<CompanySubscriptionDL>();
            try
            {
                object[] param1 = {
                new SqlParameter("@CompanyID",CompanyID)
             };
                var objlist = _db.Database.SqlQuery<CompanySubscriptionDL>("exec dbo.sp_GetParentCompanySubscripton @CompanyID", param1).ToList();

                foreach (var obj in objlist)
                {
                    CompanySubscriptionDL objCompanySubscriptionDL = new CompanySubscriptionDL();
                    objCompanySubscriptionDL.Comapny_Id = obj.Comapny_Id;
                    objCompanySubscriptionDL.Commerical_Name_En = obj.Commerical_Name_En;
                    objCompanySubscriptionDL.Commerical_Name = obj.Commerical_Name;
                    objCompanySubscriptionDL.Status = obj.Status;
                    objCompanySubscriptionDL.Rec_Id = obj.Rec_Id;
                    objCompanySubscriptionDL.Subscription_Count = obj.Subscription_Count;
                    objCompanySubscriptionDL.Subscription_Id = obj.Subscription_Id;
                    objCompanySubscriptionDL.Subscription_Code = obj.Subscription_Code;
                    objCompanySubscriptionDL.Start_Date = obj.Start_Date;
                    objCompanySubscriptionDL.End_Date = obj.End_Date;

                    objectList.Add(objCompanySubscriptionDL);

                }

                return objectList;

            }
            catch (Exception ex)
            {

                return null;
            }

        }


        public List<Cmp_SubscriptionsDL> GetChildCompanySubscripton(Guid SubscriptionID)
        {
            List<Cmp_SubscriptionsDL> objectList = new List<Cmp_SubscriptionsDL>();
            try
            {
                object[] param1 = {
                new SqlParameter("@SubscriptionID",SubscriptionID)
             };
                var objlist = _db.Database.SqlQuery<Cmp_SubscriptionsDL>("exec dbo.GetChildCompanySubscripton @SubscriptionID", param1).ToList();

                foreach (var obj in objlist)
                {
                    Cmp_SubscriptionsDL objCmp_SubscriptionsDL = new Cmp_SubscriptionsDL();
                    objCmp_SubscriptionsDL.Comapny_Id = obj.Comapny_Id;
                    objCmp_SubscriptionsDL.Commerical_Name_En = obj.Commerical_Name_En;
                    objCmp_SubscriptionsDL.Commerical_Name = obj.Commerical_Name;
                    objCmp_SubscriptionsDL.Status = obj.Status;
                    objCmp_SubscriptionsDL.Rec_Id = obj.Rec_Id;
                    objCmp_SubscriptionsDL.Subscription_Count = obj.Subscription_Count;
                    objCmp_SubscriptionsDL.Subscription_Id = obj.Subscription_Id;
                    objCmp_SubscriptionsDL.Subscription_Code = obj.Subscription_Code;
                    objCmp_SubscriptionsDL.Start_Date = obj.Start_Date;
                    objCmp_SubscriptionsDL.End_Date = obj.End_Date;
                    objCmp_SubscriptionsDL.IsGroup = obj.IsGroup;
                    objCmp_SubscriptionsDL.Parent_Id = obj.Parent_Id;

                    objectList.Add(objCmp_SubscriptionsDL);
                }
                return objectList;
            }
            catch (Exception ex)
            {
                return null;
            }
        }


        public List<CustomersCompany> GetAllCustomerCompany()
        {

            return _db.CustomersCompanies.ToList();
            //List<CustomersCompany> Userdata = new List<CustomersCompany>();
            //try
            //{
            //    string strsql;
            //    strsql = "select * from CustomersCompanies";
            //    Userdata = _db.Database.SqlQuery<CustomersCompany>(strsql).ToList();
            //    if (Userdata != null)
            //    {
            //        return Userdata;
            //    }
            //    else
            //    {
            //        return null;
            //    }
            //}
            //catch (Exception ex)
            //{

            //    return null;
            //}
        }


        public bool AddCompanySubscription(Cmp_Subscriptions ObjCmpSubscriptions)
        {
            ObjCmpSubscriptions.InsDate = DateTime.Now; //DateTime.Today;
            ObjCmpSubscriptions.InsUser = "Test";
            ObjCmpSubscriptions.Subscription_Id = GetNewHeaderId();

            _db.Cmp_Subscriptions.Add(ObjCmpSubscriptions);
            return _db.SaveChanges() > 0;
        }


        public Guid GetNewHeaderId()
        {
            Guid NewHdr;
            try
            {
                NewHdr = _db.Database.SqlQuery<Guid>("exec dbo.GetNewGuidID").FirstOrDefault<Guid>();
            }
            catch (Exception ex)
            {
                NewHdr = Guid.NewGuid();
                throw ex;
            }
            return NewHdr;
        }



        public bool SaveCompanySubscripton(Guid SubscriptionID, int SubscriptionRecID, byte Subscriptionstatus)
        {
            try
            {
                int Result = 0;

                if (SubscriptionID != Guid.Empty)
                {
                    Cmp_Subscriptions ObjForUpdate = (from objLinq in _db.Cmp_Subscriptions
                                                      where objLinq.Subscription_Id == SubscriptionID && objLinq.Rec_Id == SubscriptionRecID
                                                      select objLinq).FirstOrDefault();

                    if (ObjForUpdate != null)
                    {

                        ObjForUpdate.Status = Subscriptionstatus;
                        Result = _db.SaveChanges();
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            catch (Exception ex)
            {
                return false;
            }


        }



        public List<CompanySubscriptionUsersDL> GetCompanySubscriptonUsers(int CompanyID)
        {
            List<CompanySubscriptionUsersDL> objectList = new List<CompanySubscriptionUsersDL>();
            try
            {
                object[] param1 = {
                new SqlParameter("@CompanyID",CompanyID)
             };
                var objlist = _db.Database.SqlQuery<CompanySubscriptionUsersDL>("exec dbo.sp_GetCompanySubscriptonUsers @CompanyID", param1).ToList();
                foreach (var obj in objlist)
                {
                    CompanySubscriptionUsersDL objCompanySubscriptionUsersDLL = new CompanySubscriptionUsersDL();
                    objCompanySubscriptionUsersDLL.Commerical_Name = obj.Commerical_Name;
                    objCompanySubscriptionUsersDLL.Commerical_Name_En = obj.Commerical_Name_En;
                    objCompanySubscriptionUsersDLL.CompanySubcr_Id = obj.CompanySubcr_Id;
                    objCompanySubscriptionUsersDLL.UserId = obj.UserId;
                    objCompanySubscriptionUsersDLL.Rec_Id = obj.Rec_Id;
                    objCompanySubscriptionUsersDLL.Full_Name = obj.Full_Name;
                    objCompanySubscriptionUsersDLL.UserName = obj.UserName;
                    objCompanySubscriptionUsersDLL.Email = obj.Email;
                    objCompanySubscriptionUsersDLL.Subsc_Status = obj.Subsc_Status;

                    objectList.Add(objCompanySubscriptionUsersDLL);
                }

                return objectList;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        

    }
}
