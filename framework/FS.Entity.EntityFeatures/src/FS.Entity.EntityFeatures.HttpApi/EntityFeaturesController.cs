using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Entity.EntityFeatures;

public abstract class EntityFeaturesController : AbpControllerBase
{
    protected EntityFeaturesController()
    {
        LocalizationResource = typeof(EntityFeaturesResource);
    }
}
