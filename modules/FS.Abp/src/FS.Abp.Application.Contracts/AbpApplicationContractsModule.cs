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
    [DependsOn(typeof(FS.Abp.AspNetCore.Mvc.JsonSubTypes.AbpAspNetCoreMvcJsonSubTypesAbstractionsModule))]
    public class AbpApplicationContractsModule : AbpModule
    {

    }
}
