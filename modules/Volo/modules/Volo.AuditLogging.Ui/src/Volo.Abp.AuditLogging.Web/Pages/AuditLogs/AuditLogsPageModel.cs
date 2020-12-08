using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.Abp.AuditLogging.Web.Pages.AuditLogs
{
    public abstract class AuditLogsPageModel : AbpPageModel
    {
        public AuditLogsPageModel()
        {
            ObjectMapperContext = typeof(AbpAuditLoggingWebModule);
        }
    }
}