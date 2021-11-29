using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.AuditLogging
{
    [DependsOn(
        typeof(AuditLoggingDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AutoFilterer.Abstractions.AbpAutoFiltererAbstractionsModule))]
    public class AuditLoggingApplicationContractsModule : AbpModule
    {

    }
}
