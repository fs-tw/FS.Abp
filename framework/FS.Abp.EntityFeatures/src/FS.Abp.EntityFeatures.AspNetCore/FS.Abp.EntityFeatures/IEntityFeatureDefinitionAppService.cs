using System.Collections.Generic;

namespace FS.Abp.EntityFeatures
{
    public interface IEntityFeatureDefinitionAppService
    {
        List<EntityFeature> GetEntityFeatureDefinitionList();
    }
}