using Volo.Abp.Bundling;

namespace FS.Coding.Codes.Blazor.Host;

public class CodesBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
