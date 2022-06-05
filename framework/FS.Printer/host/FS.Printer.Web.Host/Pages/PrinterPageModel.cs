using FS.Printer.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Printer.Pages;

public abstract class PrinterPageModel : AbpPageModel
{
    protected PrinterPageModel()
    {
        LocalizationResourceType = typeof(PrinterResource);
    }
}
