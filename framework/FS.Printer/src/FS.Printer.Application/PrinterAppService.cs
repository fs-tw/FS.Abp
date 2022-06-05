using FS.Printer.Localization;
using Volo.Abp.Application.Services;

namespace FS.Printer;

public abstract class PrinterAppService : ApplicationService
{
    protected PrinterAppService()
    {
        LocalizationResource = typeof(PrinterResource);
        ObjectMapperContext = typeof(PrinterApplicationModule);
    }
}
