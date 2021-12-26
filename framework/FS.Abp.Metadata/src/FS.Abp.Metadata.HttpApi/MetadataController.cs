using FS.Abp.Metadata.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Metadata
{
    public abstract class MetadataController : AbpController
    {
        protected MetadataController()
        {
            LocalizationResource = typeof(MetadataResource);
        }
    }
}
