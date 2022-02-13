using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.Application.Services;

namespace FS.Entity.EntityFeatures;

public abstract class EntityFeaturesAppService : ApplicationService
{
    protected EntityFeaturesAppService()
    {
        LocalizationResource = typeof(EntityFeaturesResource);
        ObjectMapperContext = typeof(EntityFeaturesApplicationModule);
    }
}
