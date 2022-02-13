using Volo.Abp.Bundling;

namespace FS.Entity.MultiLinguals.Blazor.Host;

public class MultiLingualsBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
