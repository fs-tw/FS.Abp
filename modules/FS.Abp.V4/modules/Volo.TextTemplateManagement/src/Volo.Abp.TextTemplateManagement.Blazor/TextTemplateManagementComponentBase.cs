using Volo.Abp.AspNetCore.Components;
using Volo.Abp.TextTemplateManagement.Localization;

namespace Volo.Abp.TextTemplateManagement.Blazor
{
    public abstract class TextTemplateManagementComponentBase : AbpComponentBase
    {
        protected TextTemplateManagementComponentBase()
        {
            LocalizationResource = typeof(TextTemplateManagementResource);
            ObjectMapperContext = typeof(TextTemplateManagementBlazorModule);
        }
    }
}