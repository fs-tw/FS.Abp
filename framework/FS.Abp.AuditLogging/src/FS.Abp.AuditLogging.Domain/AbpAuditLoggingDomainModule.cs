using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(AbpAuditLoggingDomainSharedModule)
    )]
    public class AbpAuditLoggingDomainModule : AbpModule
    {
        
    }
}
