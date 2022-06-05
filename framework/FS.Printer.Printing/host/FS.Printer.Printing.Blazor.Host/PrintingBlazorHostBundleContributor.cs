using Volo.Abp.Bundling;

namespace FS.Printer.Printing.Blazor.Host;

public class PrintingBlazorHostBundleContributor : IBundleContributor
{
    public void AddScripts(BundleContext context)
    {

    }

    public void AddStyles(BundleContext context)
    {
        context.Add("main.css", true);
    }
}
