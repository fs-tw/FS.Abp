using FS.Abp.AuditLogging.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.AuditLogging
{
    public abstract class AuditLoggingController : AbpController
    {
        protected AuditLoggingController()
        {
            LocalizationResource = typeof(AuditLoggingResource);
        }
    }
}
