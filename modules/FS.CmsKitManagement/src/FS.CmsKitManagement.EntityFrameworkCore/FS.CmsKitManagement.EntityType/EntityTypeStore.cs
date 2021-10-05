using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Volo.Abp;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Repositories;

namespace FS.CmsKitManagement.EntityType
{
    public class EntityTypeStore<TEntityType, TEntity> 
        : Volo.Abp.Domain.Services.DomainService, IEntityTypeStore<TEntityType, TEntity> where TEntityType : class, IEntity
    {
        protected IOptions<EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>();
        protected IRepository<TEntityType> Repository => this.LazyServiceProvider.LazyGetRequiredService<IRepository<TEntityType>>();
        public async Task<IQueryable<TEntityType>> GetQueryableAsync()
        {
            var entityType = this.Options.Value.GetOrNull<TEntityType>().Get<TEntity>().EntityType;

            var query = await Repository.WithDetailsAsync();

            return query.Where(e => EF.Property<string>(e, "EntityType") == entityType);
        }

        public async Task<TEntityType> InsertAsync(TEntityType entity, bool autoSave = false, CancellationToken cancellationToken = default)
        {
            CheckAndSetEntityType(entity);

            return await Repository.InsertAsync(entity, autoSave, cancellationToken);
        }

        protected virtual void CheckAndSetEntityType(TEntityType entity)
        {
            var entityType = this.Options.Value.GetOrNull<TEntityType>().Get<TEntity>().EntityType;
            ObjectHelper.TrySetProperty<TEntityType, string>(entity,
                e => "e.EntityType",
                () => entityType);
        }
    }
}
