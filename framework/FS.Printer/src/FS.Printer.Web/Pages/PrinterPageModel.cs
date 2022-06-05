using FS.Printer.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Printer.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class PrinterPageModel : AbpPageModel
{
    protected PrinterPageModel()
    {
        LocalizationResourceType = typeof(PrinterResource);
        ObjectMapperContext = typeof(PrinterWebModule);
    }
}
