using Volo.Abp.Bundling;

namespace FS.Abp.EntityTypes.Blazor.Host
{
    public class EntityTypesBlazorHostBundleContributor : IBundleContributor
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
