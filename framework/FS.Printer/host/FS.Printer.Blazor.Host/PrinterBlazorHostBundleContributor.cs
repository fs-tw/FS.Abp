using Volo.Abp.Bundling;

namespace FS.Printer.Blazor.Host;

public class PrinterBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
