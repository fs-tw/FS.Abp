using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Wbm
{
    [Dependency(ReplaceServices = true)]
    public class WbmBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Wbm";
    }
}
