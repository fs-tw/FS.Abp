using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Linq;

namespace FS.Abp.Zero.Application
{
    public interface ICrudOperation: Volo.Abp.DependencyInjection.ITransientDependency
    {
        System.Threading.Tasks.Task<(int TotalCount, System.Collections.Generic.List<TEntity> Entities)> ListAsync<TEntity, TInput>(TInput input, System.Func<TInput, System.Linq.IQueryable<TEntity>> createFilteredQuery)
            where TEntity : class, IEntity;
    }
}