using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Settings
{
    [Dependency(ReplaceServices = true)]
    public class SettingsBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Settings";
    }
}
