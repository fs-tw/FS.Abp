using FS.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class FSPageModel : AbpPageModel
    {
        protected FSPageModel()
        {
            LocalizationResourceType = typeof(FSResource);
        }
    }
}