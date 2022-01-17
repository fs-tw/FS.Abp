using FS.Abp.Settings.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Settings
{
    public abstract class SettingsController : AbpController
    {
        protected SettingsController()
        {
            LocalizationResource = typeof(SettingsResource);
        }
    }
}
