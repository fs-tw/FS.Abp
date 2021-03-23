using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(AuthenticationDomainSharedModule)
    )]
    public class AuthenticationDomainModule : AbpModule
    {

    }
}
