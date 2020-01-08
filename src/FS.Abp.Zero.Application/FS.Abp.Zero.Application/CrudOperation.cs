using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Linq;
using System.Linq.Dynamic.Core;

namespace FS.Abp.Zero.Application
{
    public class CrudOperation : ICrudOperation
    {
        protected IAsyncQueryableExecuter AsyncQueryableExecuter { get; set; }

        public CrudOperation()
        {
            AsyncQueryableExecuter = DefaultAsyncQueryableExecuter.Instance;
        }

        public virtual async Task<(int TotalCount, List<TEntity> Entities)> ListAsync<TEntity, TInput>(
            TInput input,
            Func<TInput, IQueryable<TEntity>> createFilteredQuery
            )
            where TEntity : class, IEntity
        {
            if (createFilteredQuery == null) throw new Exception("createFilteredQuery must be not null");
            var query = createFilteredQuery.Invoke(input);

            var totalCount = await AsyncQueryableExecuter.CountAsync(query).ConfigureAwait(false);

            query = ApplySorting(query, input);
            query = ApplyPaging(query, input);

            var entities = await AsyncQueryableExecuter.ToListAsync(query).ConfigureAwait(false);

            return (TotalCount: totalCount, Entities: entities);
        }

        /// <summary>
        /// Should apply sorting if needed.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="input">The input.</param>
        protected virtual IQueryable<TEntity> ApplySorting<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
            where TEntity : class, IEntity
        {
            //Try to sort query if available
            if (input is ISortedResultRequest sortInput)
            {
                if (!sortInput.Sorting.IsNullOrWhiteSpace())
                {
                    return query.OrderBy(sortInput.Sorting);
                }
            }

            //IQueryable.Task requires sorting, so we should sort if Take will be used.
            if (input is ILimitedResultRequest)
            {
                return query.OrderBy("Id Desc");
            }

            //No sorting
            return query;
        }

        /// <summary>
        /// Should apply paging if needed.
        /// </summary>
        /// <param name="query">The query.</param>
        /// <param name="input">The input.</param>
        protected virtual IQueryable<TEntity> ApplyPaging<TEntity, TInput>(IQueryable<TEntity> query, TInput input)
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
}
