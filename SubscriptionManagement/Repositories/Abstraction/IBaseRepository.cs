using SubscriptionManagement.Models;
using SubscriptionManagement.Models.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SubscriptionManagement.Repositories.IRepositories
{
    public interface IBaseRepository
    {
        //all
        List<T> GetAll<T>() where T : class;
        List<T> GetAll<T>(params Expression<Func<T, object>>[] includes) where T : class;
        Task<List<T>> GetAllAsync<T>() where T : class;
        Task<List<T>> GetAllAsync<T>(params Expression<Func<T, object>>[] includes) where T : class;
        //all where
        List<T> GetAllWhere<T>(Expression<Func<T, bool>> predicate) where T : class;
        List<T> GetAllWhere<T>(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes) where T : class;
        Task<List<T>> GetAllWhereAsync<T>(Expression<Func<T, bool>> predicate, bool desc = false) where T : class;
        Task<List<T>> GetAllWhereAsync<T>(Expression<Func<T, bool>> predicate, bool desc = false, params Expression<Func<T, object>>[] includes) where T : class;
        //query
        IQueryable<T> GetQuery<T>() where T : class;
        IQueryable<T> GetQuery<T>(params Expression<Func<T, object>>[] includes) where T : class;
        IQueryable<T> GetQueryWhere<T>(Expression<Func<T, bool>> predicate) where T : class;
        IQueryable<T> GetQueryWhere<T>(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes) where T : class;
        //all with paging
        List<T> GetAllWithPaging<T>(int skip, int take, bool desc = false) where T : class;
        List<T> GetAllWithPaging<T>(int skip, int take, bool desc = false, params Expression<Func<T, object>>[] includes) where T : class;
        Task<List<T>> GetAllWithPagingAsync<T>(int skip, int take, bool desc = false) where T : class;
        Task<List<T>> GetAllWithPagingAsync<T>(int skip, int take, bool desc = false, params Expression<Func<T, object>>[] includes) where T : class;
        //all with paging where
        List<T> GetAllWithPagingWhere<T>(Expression<Func<T, bool>> predicate, int skip, int take, bool desc = false) where T : class;
        List<T> GetAllWithPagingWhere<T>(Expression<Func<T, bool>> predicate, int skip, int take, bool desc = false, params Expression<Func<T, object>>[] includes) where T : class;
        Task<List<T>> GetAllWithPagingWhereAsync<T>(Expression<Func<T, bool>> predicate, int skip, int take, bool desc = false) where T : class;
        Task<List<T>> GetAllWithPagingWhereAsync<T>(Expression<Func<T, bool>> predicate, int skip, int take, bool desc = false, params Expression<Func<T, object>>[] includes) where T : class;
        //From SQL
        List<T> FromSQL<T>(string sp) where T : class;
        //first or default
        T FirstOrDefault<T>() where T : class;
        T FirstOrDefault<T>(long Id) where T : class;
        T FirstOrDefaultAsNoTracking<T>(long Id) where T : class;
        T FirstOrDefault<T>(Expression<Func<T, bool>> predicate) where T : class;
        T FirstOrDefault<T>(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes) where T : class;
        Task<T> FirstOrDefaultAsync<T>() where T : class;
        Task<T> FirstOrDefaultAsync<T>(long Id) where T : class;
        Task<T> FirstOrDefaultAsync<T>(Expression<Func<T, bool>> predicate) where T : class;
        Task<T> FirstOrDefaultAsync<T>(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes) where T : class;
        //any
        bool Any<T>() where T : class;
        bool Any<T>(Expression<Func<T, bool>> predicate) where T : class;
        Task<bool> AnyAsync<T>(Expression<Func<T, bool>> predicate) where T : class;
        //count
        int Count<T>() where T : class;
        int Count<T>(Expression<Func<T, bool>> predicate) where T : class;
        Task<int> CountAsync<T>() where T : class;
        Task<int> CountAsync<T>(Expression<Func<T, bool>> predicate) where T : class;
        //add
        void Add<T>(T entity) where T : class;
        void AddRange<T>(List<T> entities) where T : class;
        //update
        void Update<T>(T entity) where T : class;
        void UpdateRange<T>(List<T> entities) where T : class;
        //remove
        void Remove<T>(T entity) where T : class;
        void Remove<T>(long Id) where T : class;
        void Remove<T>(Expression<Func<T, bool>> predicate) where T : class;
        Task RemoveAsync<T>(long Id) where T : class;
        Task RemoveAsync<T>(Expression<Func<T, bool>> predicate) where T : class;
        void RemoveRange<T>(List<T> entity) where T : class;
        //remove flag
        void RemoveFlag<T>(long Id) where T : class;
        void RemoveFlag<T>(T entity) where T : class;
        void RemoveFlagRange<T>(List<T> entities) where T : class;
        //save changes
        bool SaveChanges();
        Task<bool> SaveChangesAsync();

        //custom
        List<CompanySubscriptionDL> GetParentCompanySubscripton(string sp);
        List<Cmp_SubscriptionsDL> GetChildCompanySubscripton(string sp);
        Guid GetNewHeaderId();
        List<CompanySubscriptionUsersDL> GetCompanySubscriptonUsers(string sp);

    }
}
