using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Theme
{
    [Dependency(ReplaceServices = true)]
    public class ThemeBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Theme";
    }
}
