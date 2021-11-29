using FS.Abp.AuditLogging.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.AuditLogging.Pages
{
    public abstract class AuditLoggingPageModel : AbpPageModel
    {
        protected AuditLoggingPageModel()
        {
            LocalizationResourceType = typeof(AuditLoggingResource);
        }
    }
}