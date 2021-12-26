using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Modularity;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererApplicationContractsModule))]
    [DependsOn(typeof(FS.Abp.AuditLogging.AuditLoggingApplicationContractsModule))]
    [DependsOn(typeof(FS.Abp.EntityTypes.EntityTypesApplicationContractsModule))]
    public class AbpApplicationContractsModule : AbpModule
    {

    }
}
