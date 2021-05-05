using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace DEMO.Web
{
    [Dependency(ReplaceServices = true)]
    public class DEMOBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "DEMO";
    }
}
