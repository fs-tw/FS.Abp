
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FS.CmsKitManagement.MultiLinguals
{
    public class MultiLingualsManager : Volo.Abp.Domain.Services.DomainService
    {
        protected IOptions<FS.Abp.EntityTypes.EntityTypeOptions> Options => this.LazyServiceProvider.LazyGetRequiredService<IOptions<FS.Abp.EntityTypes.EntityTypeOptions>>();
        protected IMultiLingualRepository MultiLingualRepository => this.LazyServiceProvider.LazyGetRequiredService<IMultiLingualRepository>();

        protected Volo.Abp.ObjectMapping.IObjectMapper ObjectMapper => this.LazyServiceProvider.LazyGetRequiredService<Volo.Abp.ObjectMapping.IObjectMapper>();

        public async Task<TTranslation> GetTranslationAsync<TEntity, TTranslation>(
            TEntity entity,
            string culture = null)
            where TEntity : Volo.Abp.Domain.Entities.Entity<Guid>
            where TTranslation : class, new()
        {
            TTranslation result = default(TTranslation);

            var entityType = Options.Value
                .GetOrDefault<MultiLingual>()
                .GetOrDefault<TEntity>().EntityType;

            var entityId = entity.Id.ToString();

            var multiLingual = (await MultiLingualRepository.WithDetailsAsync())
                .Where(x => x.EntityType == entityType && x.EntityId == entityId)
                .SingleOrDefault();

            var translation = multiLingual.MultiLingualTranslations
                .SingleOrDefault(x => x.Culture == (culture ?? multiLingual.DefaultCulture));

            if (translation == null)
                return result;

            //todo: automapper Object to Property
            result = new TTranslation();
            typeof(TTranslation).GetProperties()
                .ToList()
                .ForEach(x =>
                {
                    x.SetValue(result, translation.Properties.SingleOrDefault(y => y.Name == x.Name).Value);
                });

            return result;
        }

    }
}
