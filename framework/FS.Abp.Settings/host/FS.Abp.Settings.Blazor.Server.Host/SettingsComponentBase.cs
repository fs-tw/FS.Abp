using FS.Abp.Settings.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.Settings.Blazor.Server.Host
{
    public abstract class SettingsComponentBase : AbpComponentBase
    {
        protected SettingsComponentBase()
        {
            LocalizationResource = typeof(SettingsResource);
        }
    }
}
