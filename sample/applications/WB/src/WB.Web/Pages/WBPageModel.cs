using WB.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace WB.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class WBPageModel : AbpPageModel
    {
        protected WBPageModel()
        {
            LocalizationResourceType = typeof(WBResource);
        }
    }
}