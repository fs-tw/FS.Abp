using FS.Abp.EntityTypes;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualsStore : IMultiLingualsStore
    {
        protected IOptions<EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>();

        //todo: get default culture //DefaultCulture
        public virtual async Task<MultiLingual> CreateAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;
            
            return new MultiLingual(GuidGenerator.Create())
            {
                EntityType = options.GetOrDefault<MultiLingual>().GetOrDefault<T>().EntityType,
                EntityId = entity.Id.ToString(),
                TenantId = CurrentTenant.Id,
                
            };
        }
    }
}
