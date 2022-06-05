using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace FS.PrinterManagement
{
    [Dependency(ReplaceServices = true)]
    public class PrinterManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "PrinterManagement";
    }
}
