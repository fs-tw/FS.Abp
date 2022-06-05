using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.Printer.Printing.Blazor.Server.Host;

[Dependency(ReplaceServices = true)]
public class PrintingBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Printing";
}
