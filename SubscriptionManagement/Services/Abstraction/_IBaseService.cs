using SubscriptionManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace SubscriptionManagement.Services.Abstraction
{
    public interface IBaseService
    {

    }

    public interface IBaseService<TEntity> : IBaseService where TEntity : class
    {
        //all
        List<TEntity> GetAll();
        List<TEntity> GetAll(params Expression<Func<TEntity, object>>[] includes);
        Task<List<TEntity>> GetAllAsync();
        Task<List<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[] includes);
        //all where
        List<TEntity> GetAllWhere(Expression<Func<TEntity, bool>> predicate);
        List<TEntity> GetAllWhere(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes);
        Task<List<TEntity>> GetAllWhereAsync(Expression<Func<TEntity, bool>> predicate);
        Task<List<TEntity>> GetAllWhereAsync(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes);
        // query
        IQueryable<TEntity> GetQuery();
        IQueryable<TEntity> GetQuery(params Expression<Func<TEntity, object>>[] includes);
        IQueryable<TEntity> GetQueryWhere(Expression<Func<TEntity, bool>> predicate);
        IQueryable<TEntity> GetQueryWhere(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes);
        // all paging
            
        //From SQL
        List<TEntity> FromSQL(string sp);
        //first or default
        TEntity FirstOrDefault();
        TEntity FirstOrDefault(long Id);
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate);
        TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes);
        Task<TEntity> FirstOrDefaultAsync();
        Task<TEntity> FirstOrDefaultAsync(long Id);
        Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate);
        Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes);
        //any
        bool Any(Expression<Func<TEntity, bool>> predicate);
        Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate);
        //count
        int Count();
        Task<int> CountAsync();
        //add
        void Add(TEntity entity);
        void AddRange(List<TEntity> entities);
        //update
        void Update(TEntity entity);
        void UpdateRange(List<TEntity> entities);
        //remove
        void Remove(TEntity entity);
        void Remove(long Id);
        void Remove(Expression<Func<TEntity, bool>> predicate);
        Task RemoveAsync(long Id);
        Task RemoveAsync(Expression<Func<TEntity, bool>> predicate);
        void RemoveRange(List<TEntity> entity);
        //remove flag
        void RemoveFlag(long Id);
        void RemoveFlag(TEntity entity);
        void RemoveFlagRange(List<TEntity> entities);
        //save 
        bool Save(TEntity entity);
        Task<bool> SaveAsync(TEntity entity);
        //save changes
        bool SaveChanges();
        Task<bool> SaveChangesAsync();
    }
}
