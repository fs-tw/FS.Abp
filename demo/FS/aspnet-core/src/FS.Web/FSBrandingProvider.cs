using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Web
{
    [Dependency(ReplaceServices = true)]
    public class FSBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "FS";
    }
}
