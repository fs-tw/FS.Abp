using FS.Printer.Localization;
using Volo.Abp.Application.Services;

namespace FS.PrinterManagement
{
    public abstract class PrinterManagementAppService : ApplicationService
    {
        protected PrinterManagementAppService()
        {
            LocalizationResource = typeof(PrinterResource);
            ObjectMapperContext = typeof(PrinterManagementApplicationModule);
        }
    }
}
