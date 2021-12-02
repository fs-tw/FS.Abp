using Volo.Abp.Bundling;

namespace FS.Abp.Metadata.Blazor.Host
{
    public class MetadataBlazorHostBundleContributor : IBundleContributor
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
