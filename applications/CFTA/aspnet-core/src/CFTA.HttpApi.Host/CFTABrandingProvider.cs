using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace CFTA
{
    [Dependency(ReplaceServices = true)]
    public class CFTABrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "CFTA";
    }
}
