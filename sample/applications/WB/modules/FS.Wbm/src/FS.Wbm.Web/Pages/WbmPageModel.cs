using FS.Wbm.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Wbm.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class WbmPageModel : AbpPageModel
    {
        protected WbmPageModel()
        {
            LocalizationResourceType = typeof(WbmResource);
            ObjectMapperContext = typeof(WbmWebModule);
        }
    }
}