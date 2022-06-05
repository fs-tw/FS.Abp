using FS.Printer.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Printer;

public abstract class PrinterController : AbpControllerBase
{
    protected PrinterController()
    {
        LocalizationResource = typeof(PrinterResource);
    }
}
