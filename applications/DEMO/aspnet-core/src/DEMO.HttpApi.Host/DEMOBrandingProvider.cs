using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace DEMO
{
    [Dependency(ReplaceServices = true)]
    public class DEMOBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "DEMO";
    }
}
