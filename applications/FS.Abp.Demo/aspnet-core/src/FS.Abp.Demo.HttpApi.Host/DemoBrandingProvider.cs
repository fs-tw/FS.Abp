using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Abp.Demo
{
    [Dependency(ReplaceServices = true)]
    public class DemoBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Demo";
    }
}
