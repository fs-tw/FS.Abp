using FS.Abp.Demo.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Demo.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class DemoPageModel : AbpPageModel
    {
        protected DemoPageModel()
        {
            LocalizationResourceType = typeof(DemoResource);
        }
    }
}