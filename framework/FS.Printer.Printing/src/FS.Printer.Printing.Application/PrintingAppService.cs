using FS.Printer.Localization;
using Volo.Abp.Application.Services;

namespace FS.Printer.Printing;

public abstract class PrintingAppService : ApplicationService
{
    protected PrintingAppService()
    {
        LocalizationResource = typeof(PrinterResource);
        ObjectMapperContext = typeof(PrintingApplicationModule);
    }
}
