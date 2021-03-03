using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS
{
    [Dependency(ReplaceServices = true)]
    public class FSBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "FS";
    }
}
