using FS.PrinterManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.PrinterManagement.Pages
{
    public abstract class PrinterManagementPageModel : AbpPageModel
    {
        protected PrinterManagementPageModel()
        {
            LocalizationResourceType = typeof(PrinterManagementResource);
        }
    }
}