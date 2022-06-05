using FS.Printer.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Printer.Blazor.Server.Host;

public abstract class PrinterComponentBase : AbpComponentBase
{
    protected PrinterComponentBase()
    {
        LocalizationResource = typeof(PrinterResource);
    }
}
