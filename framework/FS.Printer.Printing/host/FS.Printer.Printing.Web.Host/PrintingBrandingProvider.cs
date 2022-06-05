using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Printer.Printing;

[Dependency(ReplaceServices = true)]
public class PrintingBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Printing";
}
