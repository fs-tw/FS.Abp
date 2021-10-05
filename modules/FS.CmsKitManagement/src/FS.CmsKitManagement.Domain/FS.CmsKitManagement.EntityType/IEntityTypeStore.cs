using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace FS.CmsKitManagement.EntityType
{
    public interface IEntityTypeStore<TEntityType, TEntity> where TEntityType : class, IEntity
    {
        Task<IQueryable<TEntityType>> GetQueryableAsync();
        Task<TEntityType> InsertAsync(TEntityType entity, bool autoSave = false, CancellationToken cancellationToken = default);
    }
}