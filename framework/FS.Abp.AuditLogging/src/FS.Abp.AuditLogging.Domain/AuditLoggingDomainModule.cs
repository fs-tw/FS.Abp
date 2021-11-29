using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(AuditLoggingDomainSharedModule)
    )]
    public class AuditLoggingDomainModule : AbpModule
    {
        
    }
}
