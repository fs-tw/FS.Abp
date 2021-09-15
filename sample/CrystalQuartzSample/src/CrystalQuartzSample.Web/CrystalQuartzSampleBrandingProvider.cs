using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace CrystalQuartzSample.Web
{
    [Dependency(ReplaceServices = true)]
    public class CrystalQuartzSampleBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CrystalQuartzSample";
    }
}
