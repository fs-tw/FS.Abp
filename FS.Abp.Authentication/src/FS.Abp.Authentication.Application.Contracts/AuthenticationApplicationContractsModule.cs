using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AuthenticationDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class AuthenticationApplicationContractsModule : AbpModule
    {

    }
}
