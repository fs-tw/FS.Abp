using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace FS.PrinterManagement.Blazor.Server.Host
{
    [Dependency(ReplaceServices = true)]
    public class PrinterManagementBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "PrinterManagement";
    }
}
