using FS.Abp.AuditLogging.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.AuditLogging
{
    public abstract class AuditLoggingAppServiceBase : ApplicationService
    {
        protected AuditLoggingAppServiceBase()
        {
            LocalizationResource = typeof(AuditLoggingResource);
            ObjectMapperContext = typeof(AuditLoggingApplicationModule);
        }
    }
}
