using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.EntityFeatures.Blazor.Server.Host
{
    public abstract class EntityFeaturesComponentBase : AbpComponentBase
    {
        protected EntityFeaturesComponentBase()
        {
            LocalizationResource = typeof(EntityFeaturesResource);
        }
    }
}
