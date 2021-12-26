using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AuditLoggingApplicationModule),
        typeof(AuditLoggingDomainTestModule)
        )]
    public class AuditLoggingApplicationTestModule : AbpModule
    {

    }
}
