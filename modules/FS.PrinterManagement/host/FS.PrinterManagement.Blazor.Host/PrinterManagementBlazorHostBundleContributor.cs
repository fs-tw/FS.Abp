using Volo.Abp.Bundling;

namespace FS.PrinterManagement.Blazor.Host
{
    public class PrinterManagementBlazorHostBundleContributor : IBundleContributor
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
