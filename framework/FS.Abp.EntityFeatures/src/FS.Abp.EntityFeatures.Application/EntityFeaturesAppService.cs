using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.EntityFeatures
{
    public abstract class EntityFeaturesAppService : ApplicationService
    {
        protected EntityFeaturesAppService()
        {
            LocalizationResource = typeof(EntityFeaturesResource);
            ObjectMapperContext = typeof(EntityFeaturesApplicationModule);
        }
    }
}
