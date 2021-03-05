using System;
using System.Linq;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Linq;

namespace FS.Abp.Application
{
    public interface ISearchedAndPagedAndSortedOperation: Volo.Abp.DependencyInjection.ITransientDependency
    {
        System.Threading.Tasks.Task<(int TotalCount, System.Collections.Generic.List<TEntity> Entities)> ListAsync<TEntity, TInput>(
            IQueryable<TEntity> query,
            TInput input)
            where TEntity : class, IEntity;

        IQueryable<TEntity> ApplySorting<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity;

        IQueryable<TEntity> ApplyPaging<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity;

        IQueryable<TEntity> ApplySearching<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity;
    }
}