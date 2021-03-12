using FS.FormManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.FormManagement.Pages
{
    public abstract class FormManagementPageModel : AbpPageModel
    {
        protected FormManagementPageModel()
        {
            LocalizationResourceType = typeof(FormManagementResource);
        }
    }
}