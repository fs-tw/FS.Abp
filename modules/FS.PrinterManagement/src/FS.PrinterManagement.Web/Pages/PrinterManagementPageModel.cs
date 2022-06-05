using FS.PrinterManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.PrinterManagement.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class PrinterManagementPageModel : AbpPageModel
    {
        protected PrinterManagementPageModel()
        {
            LocalizationResourceType = typeof(PrinterManagementResource);
            ObjectMapperContext = typeof(PrinterManagementWebModule);
        }
    }
}