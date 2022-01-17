using FS.Abp.Settings.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Settings.Pages
{
    public abstract class SettingsPageModel : AbpPageModel
    {
        protected SettingsPageModel()
        {
            LocalizationResourceType = typeof(SettingsResource);
        }
    }
}