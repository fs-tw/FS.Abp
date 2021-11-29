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
    [DependsOn(typeof(FS.Abp.MediatR.AbpMediatRModule))]
    [DependsOn(typeof(FS.Abp.AutoFilterer.Abstractions.AbpAutoFiltererAbstractionsModule))]
    [DependsOn(typeof(FS.Abp.AuditLogging.AuditLoggingApplicationContractsModule))]
    public class AbpApplicationContractsModule : AbpModule
    {

    }
}
