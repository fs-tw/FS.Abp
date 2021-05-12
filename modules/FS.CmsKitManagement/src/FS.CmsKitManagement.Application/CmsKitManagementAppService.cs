using FS.CmsKitManagement.Localization;
using Volo.Abp.Application.Services;

namespace FS.CmsKitManagement
{
    public abstract class CmsKitManagementAppService : ApplicationService
    {
        protected CmsKitManagementAppService()
        {
            LocalizationResource = typeof(CmsKitManagementResource);
            ObjectMapperContext = typeof(CmsKitManagementApplicationModule);
        }
    }
}
