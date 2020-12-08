using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.LeptonTheme.Demo.Branding
{
    [Dependency(ReplaceServices = true)]
    public class DemoBrandingProvider : DefaultBrandingProvider, ISingletonDependency
    {
        public override string AppName => "Lepton";

        //public override string LogoUrl => "/logo-dark.png";

        //public override string LogoReverseUrl => "/logo-light.png";
    }
}
