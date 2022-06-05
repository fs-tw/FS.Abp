using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Printer.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class PrinterBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Printer";
}
