using Volo.Abp.Bundling;

namespace FS.Abp.SyncTable.Blazor.Host;

public class SyncTableBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
