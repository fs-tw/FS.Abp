using Volo.Abp.Bundling;

namespace FS.CodingManagement.Blazor.Host
{
    public class CodingManagementBlazorHostBundleContributor : IBundleContributor
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
