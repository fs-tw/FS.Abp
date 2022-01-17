using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Abp.Settings.Blazor.Server.Host
{
    [Dependency(ReplaceServices = true)]
    public class SettingsBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Settings";
    }
}
