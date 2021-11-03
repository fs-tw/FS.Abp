using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Linq;
using System.Linq.Dynamic.Core;
using Volo.Abp.Auditing;
using FS.Abp.Application.Dtos;
using System.Reflection;
using AutoFilterer.Abstractions;
using Volo.Abp;

namespace FS.Abp.Application
{
    public abstract class DefaultSearchedAndPagedAndSortedOperation : ISearchedAndPagedAndSortedOperation
    {
        protected IAsyncQueryableExecuter AsyncQueryableExecuter { get; set; }
        protected DefaultSearchedAndPagedAndSortedOperation(IAsyncQueryableExecuter asyncQueryableExecuter)
        {
            AsyncQueryableExecuter = asyncQueryableExecuter;
        }
        public virtual async Task<(int TotalCount, List<TEntity> Entities)> ListAsync<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity
        {
            if (query == null) throw new Exception("query must be not null");

            query = ApplySearching(query, input);

            var totalCount = await AsyncQueryableExecuter.CountAsync(query);

            if (input is ISortedResultRequest sortedResultRequest)
            {
                if (sortedResultRequest.Sorting.IsNullOrWhiteSpace())
                {
                    sortedResultRequest.Sorting = getDefaultSortProperty<TEntity>();
                }
            }

            query = ApplySorting(query, input);
            query = ApplyPaging(query, input);

            var entities = await AsyncQueryableExecuter.ToListAsync(query);

            return (TotalCount: totalCount, Entities: entities);
        }
        private string getDefaultSortProperty<TEntity>()
        {
            if (typeof(TEntity).IsAssignableTo<IHasCreationTime>())
            {
                return $"{nameof(IHasCreationTime.CreationTime)} Desc";
            }
            if (Volo.Abp.Reflection.ReflectionHelper.IsAssignableToGenericType(typeof(TEntity), typeof(IEntity<>)))
            {

                return $"{nameof(IEntity<Guid>.Id)} Desc";
            }
            throw new AbpException("No sorting specified but this query requires sorting!");
        }
        public virtual IQueryable<TEntity> ApplySearching<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity
        {
            return query;
        }

        public virtual IQueryable<TEntity> ApplySorting<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity
        {
            if (input is ISortedResultRequest sortedResultRequest)
            {
                return query.OrderBy(sortedResultRequest.Sorting);

            }
            if (input is ILimitedResultRequest)
            {
                return query.OrderBy(getDefaultSortProperty<TEntity>());
            }


            //No sorting
            return query;
        }

        public virtual IQueryable<TEntity> ApplyPaging<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity
        {
            //Try to use paging if available
            if (input is IPagedResultRequest pagedInput)
            {
                return query.PageBy(pagedInput);
            }

            //Try to limit query result if available
            if (input is ILimitedResultRequest limitedInput)
            {
                return query.Take(limitedInput.MaxResultCount);
            }

            //No paging
            return query;
        }


    }

    public class AutoFiltererSearchedAndPagedAndSortedOperation
        : DefaultSearchedAndPagedAndSortedOperation, ISearchedAndPagedAndSortedOperation, Volo.Abp.DependencyInjection.ITransientDependency
    {

        public AutoFiltererSearchedAndPagedAndSortedOperation(
            IAsyncQueryableExecuter asyncQueryableExecuter
            )
            : base(asyncQueryableExecuter)
        {
        }

        public override IQueryable<TEntity> ApplySearching<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
        {
            if (input is IOrderablePaginationFilter fullFilter)
            {
                return fullFilter.ApplyFilterWithoutPaginationAndOrdering(query);
            }

            return base.ApplySearching(query, input);
        }

        public override IQueryable<TEntity> ApplySorting<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
        {
            if (input is IOrderable orderable)
            {
                return orderable.ApplyOrder(query);
            }
            return base.ApplySorting(query, input);
        }

        public override IQueryable<TEntity> ApplyPaging<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
        {
            if (input is IOrderable orderableFilter)
                return orderableFilter.ApplyOrder(query);
            return base.ApplyPaging(query, input);
        }


    }
}
