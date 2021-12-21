using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.EntityFeatures
{
    public abstract class EntityFeaturesController : AbpControllerBase
    {
        protected EntityFeaturesController()
        {
            LocalizationResource = typeof(EntityFeaturesResource);
        }
    }
}
