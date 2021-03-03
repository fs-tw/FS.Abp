using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.LineNotify
{
    [Dependency(ReplaceServices = true)]
    public class LineNotifyBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "LineNotify";
    }
}
