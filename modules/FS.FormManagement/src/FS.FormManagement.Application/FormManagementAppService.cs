using FS.FormManagement.Localization;
using Volo.Abp.Application.Services;

namespace FS.FormManagement
{
    public abstract class FormManagementAppService : ApplicationService
    {
        protected FormManagementAppService()
        {
            LocalizationResource = typeof(FormManagementResource);
            ObjectMapperContext = typeof(FormManagementApplicationModule);
        }
    }
}
