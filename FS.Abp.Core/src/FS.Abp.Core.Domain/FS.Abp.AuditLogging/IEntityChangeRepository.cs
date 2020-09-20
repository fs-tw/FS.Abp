using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.AuditLogging;
using Volo.Abp.Domain.Repositories;

namespace FS.Abp.AuditLogging
{
    public interface IEntityChangeRepository:IRepository<EntityChange,Guid>
    {
        Task<List<EntityChange>> ListByEntityIdAsync(Guid id);
        Task<List<EntityChange>> ListByEntityIdAsync<TEntity>(Guid id)
            where TEntity : Volo.Abp.Domain.Entities.IEntity<Guid>;
    }
}
