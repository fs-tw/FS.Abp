using FS.Abp.Settings.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Settings.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class SettingsPageModel : AbpPageModel
    {
        protected SettingsPageModel()
        {
            LocalizationResourceType = typeof(SettingsResource);
            ObjectMapperContext = typeof(SettingsWebModule);
        }
    }
}