using Volo.Abp.AspNetCore.Components;
using Volo.Abp.LanguageManagement.Localization;

namespace Volo.Abp.LanguageManagement.Blazor
{
    public abstract class LanguageManagementComponentBase : AbpComponentBase
    {
        protected LanguageManagementComponentBase()
        {
            ObjectMapperContext = typeof(LanguageManagementBlazorModule);
            LocalizationResource = typeof(LanguageManagementResource);
        }
    }
}