using Volo.Abp.AspNetCore.Components;
using Volo.Abp.AuditLogging.Localization;

namespace Volo.Abp.AuditLogging.Blazor
{
    public abstract class AbpAuditLoggingComponentBase : AbpComponentBase
    {
        protected AbpAuditLoggingComponentBase()
        {
            LocalizationResource = typeof(AuditLoggingResource);
            ObjectMapperContext = typeof(AbpAuditLoggingBlazorModule);
        }
    }
}