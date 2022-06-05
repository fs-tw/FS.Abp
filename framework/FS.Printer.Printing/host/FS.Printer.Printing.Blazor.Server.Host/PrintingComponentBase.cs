using FS.Printer.Printing.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Printer.Printing.Blazor.Server.Host;

public abstract class PrintingComponentBase : AbpComponentBase
{
    protected PrintingComponentBase()
    {
        LocalizationResource = typeof(PrintingResource);
    }
}
