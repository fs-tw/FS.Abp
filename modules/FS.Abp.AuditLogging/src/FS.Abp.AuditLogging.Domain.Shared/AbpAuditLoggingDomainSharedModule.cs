using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.AuditLogging.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(typeof(FS.Abp.AuditLogging.AbpAuditLoggingCoreModule))]
    [DependsOn(typeof(Volo.Abp.AuditLogging.AbpAuditLoggingDomainSharedModule))]
    public class AbpAuditLoggingDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
        }
    }
}
