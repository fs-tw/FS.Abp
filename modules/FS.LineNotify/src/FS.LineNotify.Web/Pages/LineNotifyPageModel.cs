using FS.LineNotify.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.LineNotify.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class LineNotifyPageModel : AbpPageModel
    {
        protected LineNotifyPageModel()
        {
            LocalizationResourceType = typeof(LineNotifyResource);
            ObjectMapperContext = typeof(LineNotifyWebModule);
        }
    }
}