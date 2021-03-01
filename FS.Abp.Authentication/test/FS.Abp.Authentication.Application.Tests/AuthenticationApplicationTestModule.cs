using Volo.Abp.Modularity;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AuthenticationApplicationModule),
        typeof(AuthenticationDomainTestModule)
        )]
    public class AuthenticationApplicationTestModule : AbpModule
    {

    }
}
