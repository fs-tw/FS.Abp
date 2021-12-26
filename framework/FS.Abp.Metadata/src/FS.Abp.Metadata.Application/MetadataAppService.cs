using FS.Abp.Metadata.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.Metadata
{
    public abstract class MetadataAppService : ApplicationService
    {
        protected MetadataAppService()
        {
            LocalizationResource = typeof(MetadataResource);
            ObjectMapperContext = typeof(MetadataApplicationModule);
        }
    }
}
