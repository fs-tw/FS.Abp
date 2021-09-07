using FS.CodingManagement.Localization;
using Volo.Abp.Application.Services;

namespace FS.CodingManagement
{
    public abstract class CodingManagementAppService : ApplicationService
    {
        protected CodingManagementAppService()
        {
            LocalizationResource = typeof(CodingManagementResource);
            ObjectMapperContext = typeof(CodingManagementApplicationModule);
        }
    }
}
