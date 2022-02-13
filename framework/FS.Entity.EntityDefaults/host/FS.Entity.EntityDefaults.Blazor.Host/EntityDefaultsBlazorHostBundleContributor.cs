using Volo.Abp.Bundling;

namespace FS.Entity.EntityDefaults.Blazor.Host;

public class EntityDefaultsBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
