using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.AuditLogging
{
    [Dependency(ReplaceServices = true)]
    public class AuditLoggingBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "AuditLogging";
    }
}
