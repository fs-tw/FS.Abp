using Volo.FileManagement.Localization;
using Volo.Abp.Application.Services;

namespace Volo.FileManagement
{
    public abstract class FileManagementAppService : ApplicationService
    {
        protected FileManagementAppService()
        {
            LocalizationResource = typeof(FileManagementResource);
            ObjectMapperContext = typeof(FileManagementApplicationModule);
        }
    }
}
