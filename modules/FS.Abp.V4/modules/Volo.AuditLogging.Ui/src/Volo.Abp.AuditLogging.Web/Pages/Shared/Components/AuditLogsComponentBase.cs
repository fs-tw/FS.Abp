using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.AuditLogging.Web.Pages.Shared.Components
{
    public abstract class AuditLogsComponentBase : AbpViewComponent
    {
        public AuditLogsComponentBase()
        {
            ObjectMapperContext = typeof(AbpAuditLoggingWebModule);
        }
    }
}