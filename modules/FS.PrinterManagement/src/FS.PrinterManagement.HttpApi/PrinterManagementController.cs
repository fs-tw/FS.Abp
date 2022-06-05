using FS.PrinterManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.PrinterManagement
{
    public abstract class PrinterManagementController : AbpController
    {
        protected PrinterManagementController()
        {
            LocalizationResource = typeof(PrinterManagementResource);
        }
    }
}
