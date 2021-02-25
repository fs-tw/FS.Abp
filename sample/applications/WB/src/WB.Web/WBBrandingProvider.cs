using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace WB.Web
{
    [Dependency(ReplaceServices = true)]
    public class WBBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "WB";
    }
}
