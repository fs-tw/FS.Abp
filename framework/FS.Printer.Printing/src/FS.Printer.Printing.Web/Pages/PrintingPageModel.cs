using FS.Printer.Printing.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Printer.Printing.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class PrintingPageModel : AbpPageModel
{
    protected PrintingPageModel()
    {
        LocalizationResourceType = typeof(PrintingResource);
        ObjectMapperContext = typeof(PrintingWebModule);
    }
}
