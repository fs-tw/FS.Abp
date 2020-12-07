using Volo.Abp.Application.Services;
using Volo.Abp.AuditLogging.Localization;

namespace Volo.Abp.AuditLogging
{
    public abstract class AuditLogsAppServiceBase : ApplicationService
    {
        protected AuditLogsAppServiceBase()
        {
            ObjectMapperContext = typeof(AbpAuditLoggingApplicationModule);
            LocalizationResource = typeof(AuditLoggingResource);
        }
    }
}