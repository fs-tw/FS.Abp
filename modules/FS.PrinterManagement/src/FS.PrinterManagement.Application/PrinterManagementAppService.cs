using FS.PrinterManagement.Localization;
using Volo.Abp.Application.Services;

namespace FS.PrinterManagement
{
    public abstract class PrinterManagementAppService : ApplicationService
    {
        protected PrinterManagementAppService()
        {
            LocalizationResource = typeof(PrinterManagementResource);
            ObjectMapperContext = typeof(PrinterManagementApplicationModule);
        }
    }
}
