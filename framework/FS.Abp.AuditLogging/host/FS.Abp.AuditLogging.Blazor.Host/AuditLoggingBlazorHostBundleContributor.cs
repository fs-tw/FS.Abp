using Volo.Abp.Bundling;

namespace FS.Abp.AuditLogging.Blazor.Host
{
    public class AuditLoggingBlazorHostBundleContributor : IBundleContributor
    {
        public void AddScripts(BundleContext context)
        {

        }

        public void AddStyles(BundleContext context)
        {
            context.Add("main.css", true);
        }
    }
}
