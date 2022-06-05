using FS.Printer.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Printer.Printing;

public abstract class PrintingController : AbpControllerBase
{
    protected PrintingController()
    {
        LocalizationResource = typeof(PrinterResource);
    }
}
