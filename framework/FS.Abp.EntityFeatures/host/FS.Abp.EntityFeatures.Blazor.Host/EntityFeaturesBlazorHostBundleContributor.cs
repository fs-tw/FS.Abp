using Volo.Abp.Bundling;

namespace FS.Abp.EntityFeatures.Blazor.Host
{
    public class EntityFeaturesBlazorHostBundleContributor : IBundleContributor
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
