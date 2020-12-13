using FS.Theme.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Theme
{
    public abstract class ThemeController : AbpController
    {
        protected ThemeController()
        {
            LocalizationResource = typeof(ThemeResource);
        }
    }
}
