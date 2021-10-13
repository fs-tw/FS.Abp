using FS.Abp.EntityTypes;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualsStore : IMultiLingualsStore
    {
        protected IOptions<EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityTypeOptions>>();

        public async Task<MultiLingual> FindMultiLingualAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;
            var entityType = Options.Value
                .GetOrDefault<MultiLingual>()
                .GetOrDefault<T>().EntityType;

            var entityId = entity.Id.ToString();

            var multiLingual = (await MultiLingual.WithDetailsAsync())
                .Where(x => x.EntityType == entityType && x.EntityId == entityId)
                .SingleOrDefault();

            return multiLingual;
        }

        //todo: get default culture //DefaultCulture
        public virtual Task<MultiLingual> CreateMultiLingualAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;

            var result = new MultiLingual(GuidGenerator.Create())
            {
                EntityType = options.GetOrDefault<MultiLingual>().GetOrDefault<T>().EntityType,
                EntityId = entity.Id.ToString(),
                TenantId = CurrentTenant.Id,

            };
            return Task.FromResult(result);
        }

        public virtual Task<MultiLingualTranslation> CreateMultiLingualTranslationAsync(MultiLingual entity, string culture)
        {
            var result = new MultiLingualTranslation(GuidGenerator.Create())
            {
                Culture = culture,
                MultiLingual = entity,
                MultiLingualId = entity.Id,
                TenantId = CurrentTenant.Id
            };
            return Task.FromResult(result);
        }


    }
}
