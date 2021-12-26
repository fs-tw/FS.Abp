using FS.Abp.EntityFeatures;
using Microsoft.Extensions.Options;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.MultiLinguals
{
    public partial class MultiLingualsStore : IMultiLingualsStore
    {
        protected IOptions<EntityFeaturesOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<EntityFeaturesOptions>>();

        public async Task<MultiLingual> FindMultiLingualAsync(string entityType, string entityId)
        {
            return (await MultiLingual.WithDetailsAsync())
                .Where(x => x.EntityType == entityType && x.EntityId == entityId)
                .SingleOrDefault();
        }

        public async Task<MultiLingual> FindMultiLingualAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;
            var entityType = options.GetOrDefault<MultiLingual>().GetOrDefault<T>().EntityType;
            var entityId = entity.Id.ToString();

            return await FindMultiLingualAsync(entityType, entityId);
        }

        //todo: get default culture //DefaultCulture
        public virtual Task<MultiLingual> CreateMultiLingualAsync(string entityType, string entityId)
        {
            var result = new MultiLingual(GuidGenerator.Create())
            {
                EntityType = entityType,
                EntityId = entityId,
                TenantId = CurrentTenant.Id,

            };
            return Task.FromResult(result);
        }
        public virtual Task<MultiLingual> CreateMultiLingualAsync<T>(T entity)
            where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        {
            var options = Options.Value;
            var entityType = options.GetOrDefault<MultiLingual>().GetOrDefault<T>().EntityType;
            var entityId = entity.Id.ToString();

            return CreateMultiLingualAsync(entityType, entityId);
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

        //public async Task DeleteMultiLingualAsync(string entityType, string entityId)
        //{
        //    var entity= (await MultiLingual.WithDetailsAsync())
        //        .Where(x => x.EntityType == entityType && x.EntityId == entityId)
        //        .SingleOrDefault();

        //    await DeleteMultiLingualAsync(entityType, entityId);
        //}

        //public async Task DeleteMultiLingualAsync<T>(T entity)
        //    where T : Volo.Abp.Domain.Entities.IEntity<Guid>
        //{
        //    var options = Options.Value;
        //    var entityType = options.GetOrDefault<MultiLingual>().GetOrDefault<T>().EntityType;
        //    var entityId = entity.Id.ToString();

        //    await DeleteMultiLingualAsync(entityType, entityId);
        //}
    }
}
