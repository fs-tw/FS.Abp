using FS.Abp.Metadata.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.Metadata.Blazor.Server.Host
{
    public abstract class MetadataComponentBase : AbpComponentBase
    {
        protected MetadataComponentBase()
        {
            LocalizationResource = typeof(MetadataResource);
        }
    }
}
