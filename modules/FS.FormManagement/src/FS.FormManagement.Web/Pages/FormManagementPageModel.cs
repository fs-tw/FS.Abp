using FS.FormManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.FormManagement.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class FormManagementPageModel : AbpPageModel
    {
        protected FormManagementPageModel()
        {
            LocalizationResourceType = typeof(FormManagementResource);
            ObjectMapperContext = typeof(FormManagementWebModule);
        }
    }
}