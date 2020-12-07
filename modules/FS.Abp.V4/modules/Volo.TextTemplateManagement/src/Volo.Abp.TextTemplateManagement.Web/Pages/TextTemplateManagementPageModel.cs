using Volo.Abp.TextTemplateManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Abp.TextTemplateManagement.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class TextTemplateManagementPageModel : AbpPageModel
    {
        protected TextTemplateManagementPageModel()
        {
            LocalizationResourceType = typeof(TextTemplateManagementResource);
            ObjectMapperContext = typeof(TextTemplateManagementWebModule);
        }
    }
}