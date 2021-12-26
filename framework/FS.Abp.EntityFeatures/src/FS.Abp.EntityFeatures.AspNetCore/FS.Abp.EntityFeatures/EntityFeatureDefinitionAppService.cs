using Microsoft.Extensions.Options;
using System.Collections.Generic;
using System.Linq;

namespace FS.Abp.EntityFeatures
{
    public class EntityFeatureDefinitionAppService : Volo.Abp.Application.Services.ApplicationService, IEntityFeatureDefinitionAppService
    {
        protected EntityFeaturesOptions Options { get; }

        public EntityFeatureDefinitionAppService(IOptions<EntityFeaturesOptions> options)
        {
            Options = options.Value;
        }

        public List<EntityFeature> GetEntityFeatureDefinitionList()
        {
            var entityTypes = Options.ToList();
            return entityTypes.Select(et =>
            {
                return new EntityFeature()
                {
                    Name = et.Key.Name,
                    Definitions = et.Value.Select(e =>
                    {
                        return e.Value;
                    }).ToList()
                };
            }).ToList();
        }

    }
}
