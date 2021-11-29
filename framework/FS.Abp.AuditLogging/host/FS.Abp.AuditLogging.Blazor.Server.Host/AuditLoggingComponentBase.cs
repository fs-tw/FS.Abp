using FS.Abp.AuditLogging.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.AuditLogging.Blazor.Server.Host
{
    public abstract class AuditLoggingComponentBase : AbpComponentBase
    {
        protected AuditLoggingComponentBase()
        {
            LocalizationResource = typeof(AuditLoggingResource);
        }
    }
}
