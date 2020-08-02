using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.AuditLogging;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.AuditLogging
{
    public class EfCoreEntityChangeRepository :
        EfCoreRepository<IAuditLoggingDbContext, EntityChange, Guid>,
        IEntityChangeRepository
    {
        public EfCoreEntityChangeRepository(IDbContextProvider<IAuditLoggingDbContext> dbContextProvider)
            : base(dbContextProvider) { }
        public async Task<List<EntityChange>> ListByEntityIdAsync(Guid id)
        {
            return await DbContext.Set<EntityChange>().AsNoTracking().IncludeDetails()
                .Where(x => x.EntityId == id.ToString())
                .ToListAsync();
        }

        public async Task<List<EntityChange>> ListByEntityIdAsync<TEntity>(Guid id)
            where TEntity : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var entityFullName = typeof(TEntity).FullName;
            var entityId = id;
            return await GetQueryable().AsNoTracking().IncludeDetails()
                .Where(x => x.EntityTypeFullName == entityFullName.TruncateFromBeginning(EntityChangeConsts.MaxEntityTypeFullNameLength))
                .Where(x => x.EntityId == entityId.ToString())
                .ToListAsync();
        }
    }
}
