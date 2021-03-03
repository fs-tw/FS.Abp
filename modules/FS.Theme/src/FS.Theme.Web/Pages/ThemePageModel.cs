using FS.Theme.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Theme.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ThemePageModel : AbpPageModel
    {
        protected ThemePageModel()
        {
            LocalizationResourceType = typeof(ThemeResource);
            ObjectMapperContext = typeof(ThemeWebModule);
        }
    }
}