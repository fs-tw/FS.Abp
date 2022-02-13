using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Entity.EntityFeatures.Blazor.Server.Host;

public abstract class EntityFeaturesComponentBase : AbpComponentBase
{
    protected EntityFeaturesComponentBase()
    {
        LocalizationResource = typeof(EntityFeaturesResource);
    }
}
