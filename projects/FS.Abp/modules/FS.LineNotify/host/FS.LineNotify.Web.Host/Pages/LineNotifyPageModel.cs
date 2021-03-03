using FS.LineNotify.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.LineNotify.Pages
{
    public abstract class LineNotifyPageModel : AbpPageModel
    {
        protected LineNotifyPageModel()
        {
            LocalizationResourceType = typeof(LineNotifyResource);
        }
    }
}