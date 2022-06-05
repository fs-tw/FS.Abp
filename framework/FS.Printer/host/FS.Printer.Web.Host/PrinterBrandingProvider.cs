using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.Printer;

[Dependency(ReplaceServices = true)]
public class PrinterBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Printer";
}
