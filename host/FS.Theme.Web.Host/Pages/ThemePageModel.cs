using FS.Theme.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Theme.Pages
{
    public abstract class ThemePageModel : AbpPageModel
    {
        protected ThemePageModel()
        {
            LocalizationResourceType = typeof(ThemeResource);
        }
    }
}