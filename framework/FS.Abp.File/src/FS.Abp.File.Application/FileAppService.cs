using FS.Abp.File.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.File
{
    public abstract class FileAppService : ApplicationService
    {
        protected FileAppService()
        {
            LocalizationResource = typeof(FileResource);
            ObjectMapperContext = typeof(FileApplicationModule);
        }
    }
}
