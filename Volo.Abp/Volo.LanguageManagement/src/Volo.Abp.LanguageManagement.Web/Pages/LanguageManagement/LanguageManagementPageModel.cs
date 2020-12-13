using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.LanguageManagement.Localization;

namespace Volo.Abp.LanguageManagement.Pages.LanguageManagement
{
    public abstract class LanguageManagementPageModel: AbpPageModel
    {
        protected LanguageManagementPageModel()
        {
            ObjectMapperContext = typeof(LanguageManagementWebModule);
            LocalizationResourceType = typeof(LanguageManagementResource);
        }
    }
}