using FS.PrinterManagement.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.PrinterManagement.Blazor.Server.Host
{
    public abstract class PrinterManagementComponentBase : AbpComponentBase
    {
        protected PrinterManagementComponentBase()
        {
            LocalizationResource = typeof(PrinterManagementResource);
        }
    }
}
