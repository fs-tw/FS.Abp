using Volo.Abp.TextTemplateManagement.Localization;
using Volo.Abp.Application.Services;

namespace Volo.Abp.TextTemplateManagement
{
    public abstract class TextTemplateManagementAppServiceBase : ApplicationService
    {
        protected TextTemplateManagementAppServiceBase()
        {
            LocalizationResource = typeof(TextTemplateManagementResource);
            ObjectMapperContext = typeof(TextTemplateManagementApplicationModule);
        }
    }
}
