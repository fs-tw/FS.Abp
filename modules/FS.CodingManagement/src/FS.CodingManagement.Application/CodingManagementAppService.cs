using FS.Coding.Localization;
using Volo.Abp.Application.Services;

namespace FS.CodingManagement
{
    public abstract class CodingManagementAppService : ApplicationService
    {
        protected CodingManagementAppService()
        {
            LocalizationResource = typeof(CodingResource);
            ObjectMapperContext = typeof(CodingManagementApplicationModule);
        }
    }
}
