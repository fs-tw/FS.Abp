using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Abp.AuditLogging.Blazor.Server.Host
{
    [Dependency(ReplaceServices = true)]
    public class AuditLoggingBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "AuditLogging";
    }
}
