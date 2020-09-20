using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreDomainSharedModule),
        typeof(Volo.Abp.Specifications.AbpSpecificationsModule),
        typeof(Volo.Abp.AuditLogging.AbpAuditLoggingDomainModule),
        typeof(EasyAbp.Abp.Trees.AbpTreesDomainModule)
        )]
    public class CoreDomainModule : AbpModule
    {

    }
}
