using Volo.Abp.Bundling;

namespace FS.Coding.Blazor.Host;

public class CodingBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
