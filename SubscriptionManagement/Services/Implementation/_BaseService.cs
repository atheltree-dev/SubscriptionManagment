using SubscriptionManagement.Models;
using SubscriptionManagement.Repositories.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.Linq;
//using SubscriptionManagement.Services.ServiceHelpers;
using SubscriptionManagement.Services.Abstraction;

namespace SubscriptionManagement.Services.Implementation
{
    public class BaseService : IBaseService
    {
        public BaseService()
        {
            //try
            //{
            //    SessionConfig.RegisterSessions();
            //    SettingsConfig.RegisterConfigurations();
            //}
            //catch { }
        }
    }

    public abstract class BaseService<TEntity> : BaseService, IBaseService<TEntity> where TEntity : class
    {
        private readonly IBaseRepository _repo;

        public BaseService(IBaseRepository repo)
        {
            _repo = repo;
        }

        public virtual List<TEntity> GetAll()
        {
            return _repo.GetAll<TEntity>();
        }
        public virtual List<TEntity> GetAll(params Expression<Func<TEntity, object>>[] includes)
        {
            return _repo.GetAll<TEntity>(includes);
        }
        public virtual async Task<List<TEntity>> GetAllAsync()
        {
            return await _repo.GetAllAsync<TEntity>();
        }
        public virtual async Task<List<TEntity>> GetAllAsync(params Expression<Func<TEntity, object>>[] includes)
        {
            return await _repo.GetAllAsync<TEntity>(includes);
        }
        //all where
        public virtual List<TEntity> GetAllWhere(Expression<Func<TEntity, bool>> predicate)
        {
            return _repo.GetAllWhere<TEntity>(predicate);
        }
        public virtual List<TEntity> GetAllWhere(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes)
        {
            return _repo.GetAllWhere<TEntity>(predicate, includes);
        }
        public virtual async Task<List<TEntity>> GetAllWhereAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _repo.GetAllWhereAsync<TEntity>(predicate);
        }
        public virtual async Task<List<TEntity>> GetAllWhereAsync(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes)
        {
            return await _repo.GetAllWhereAsync<TEntity>(predicate, desc: false, includes);
        }
        // query
        public virtual IQueryable<TEntity> GetQuery()
        {
            return _repo.GetQuery<TEntity>();
        }
        public virtual IQueryable<TEntity> GetQuery(params Expression<Func<TEntity, object>>[] includes)
        {
            return _repo.GetQuery<TEntity>(includes);

        }
        // query
        public virtual IQueryable<TEntity> GetQueryWhere(Expression<Func<TEntity, bool>> predicate)
        {
            return _repo.GetQueryWhere<TEntity>(predicate);
        }
        public virtual IQueryable<TEntity> GetQueryWhere(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes)
        {
            return _repo.GetQueryWhere<TEntity>(predicate, includes);
        }
    
    
       
        //From SQL
        public virtual List<TEntity> FromSQL(string sp)
        {
            return _repo.FromSQL<TEntity>(sp);
        }
        //first or default
        public virtual TEntity FirstOrDefault()
        {
            return _repo.FirstOrDefault<TEntity>();
        }
        public virtual TEntity FirstOrDefault(long Id)
        {
            return _repo.FirstOrDefault<TEntity>(Id);
        }
        public virtual TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate)
        {
            return _repo.FirstOrDefault<TEntity>(predicate);
        }
        public virtual TEntity FirstOrDefault(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes)
        {
            return _repo.FirstOrDefault<TEntity>(predicate, includes);
        }
        public virtual async Task<TEntity> FirstOrDefaultAsync()
        {
            return await _repo.FirstOrDefaultAsync<TEntity>();
        }
        public virtual async Task<TEntity> FirstOrDefaultAsync(long Id)
        {
            return await _repo.FirstOrDefaultAsync<TEntity>(Id);
        }
        public virtual async Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _repo.FirstOrDefaultAsync<TEntity>(predicate);
        }
        public virtual async Task<TEntity> FirstOrDefaultAsync(Expression<Func<TEntity, bool>> predicate, params Expression<Func<TEntity, object>>[] includes)
        {
            return await _repo.FirstOrDefaultAsync<TEntity>(predicate, includes);
        }
        //any
        public virtual bool Any(Expression<Func<TEntity, bool>> predicate)
        {
            return _repo.Any<TEntity>(predicate);
        }
        public virtual async Task<bool> AnyAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await _repo.AnyAsync<TEntity>(predicate);
        }
        //count
        public virtual int Count()
        {
            return _repo.Count<TEntity>();
        }
        public virtual async Task<int> CountAsync()
        {
            return await _repo.CountAsync<TEntity>();
        }
        //add
        public virtual void Add(TEntity entity)
        {
            _repo.Add(entity);
        }
        public virtual void AddRange(List<TEntity> entities)
        {
            _repo.AddRange(entities);
        }
        //update
        public virtual void Update(TEntity entity)
        {
            _repo.Update(entity);
        }
        public virtual void UpdateRange(List<TEntity> entities)
        {
            _repo.UpdateRange(entities);
        }
        //remove
        public virtual void Remove(TEntity entity)
        {
            _repo.Remove(entity);
        }
        public virtual void Remove(long Id)
        {
            _repo.Remove<TEntity>(Id);
        }
        public virtual void Remove(Expression<Func<TEntity, bool>> predicate)
        {
            _repo.Remove(predicate);
        }
        public virtual async Task RemoveAsync(long Id)
        {
            await _repo.RemoveAsync<TEntity>(Id);
        }
        public virtual async Task RemoveAsync(Expression<Func<TEntity, bool>> predicate)
        {
            await _repo.RemoveAsync<TEntity>(predicate);
        }
        public virtual void RemoveRange(List<TEntity> entities)
        {
            _repo.RemoveRange<TEntity>(entities);
        }
        //remove flag
        public virtual void RemoveFlag(long Id)
        {
            _repo.RemoveFlag<TEntity>(Id);
        }
        public virtual void RemoveFlag(TEntity entity)
        {
            _repo.RemoveFlag(entity);
        }
        public virtual void RemoveFlagRange(List<TEntity> entities)
        {
            _repo.RemoveFlagRange(entities);
        }
        //save 
        public virtual bool Save(TEntity entity)
        {
            var prop = typeof(TEntity).GetProperty("Id");
            if (prop != null)
            {
                var stringId = prop.GetValue(entity).ToString();
                if (!string.IsNullOrEmpty(stringId))
                {
                    var id = long.Parse(stringId);
                    if (id > 0)
                    {
                        Update(entity);
                    }
                    else
                    {
                        Add(entity);
                    }
                    return SaveChanges();
                }
            }
            return false;
        }
        public virtual async Task<bool> SaveAsync(TEntity entity)
        {
            var prop = typeof(TEntity).GetProperty("Id");
            if (prop != null)
            {
                var stringId = prop.GetValue(entity).ToString();
                if (!string.IsNullOrEmpty(stringId))
                {
                    var id = long.Parse(stringId);
                    if (id > 0)
                    {
                        Update(entity);
                    }
                    else
                    {
                        Add(entity);
                    }
                    return await SaveChangesAsync();
                }
            }
            return false;
        }
        //save changes
        public bool SaveChanges()
        {
            return _repo.SaveChanges();
        }
        public async Task<bool> SaveChangesAsync()
        {
            return await _repo.SaveChangesAsync();
        }
    }
}
