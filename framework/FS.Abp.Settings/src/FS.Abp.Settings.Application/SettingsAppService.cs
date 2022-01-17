using FS.Abp.Settings.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.Settings
{
    public abstract class SettingsAppService : ApplicationService
    {
        protected SettingsAppService()
        {
            LocalizationResource = typeof(SettingsResource);
            ObjectMapperContext = typeof(SettingsApplicationModule);
        }
    }
}
