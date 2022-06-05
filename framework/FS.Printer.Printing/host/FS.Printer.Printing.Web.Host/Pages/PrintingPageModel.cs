using FS.Printer.Printing.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Printer.Printing.Pages;

public abstract class PrintingPageModel : AbpPageModel
{
    protected PrintingPageModel()
    {
        LocalizationResourceType = typeof(PrintingResource);
    }
}
