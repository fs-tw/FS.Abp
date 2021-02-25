using FS.Wbm.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Wbm.Pages
{
    public abstract class WbmPageModel : AbpPageModel
    {
        protected WbmPageModel()
        {
            LocalizationResourceType = typeof(WbmResource);
        }
    }
}