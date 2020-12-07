using Volo.Abp.Modularity;

namespace Volo.Abp.IdentityServer
{
    [DependsOn(
        typeof(AbpIdentityServerApplicationModule),
        typeof(AbpIdentityServerDomainTestModule)
    )]
    public class AbpIdentityServerApplicationTestModule : AbpModule
    {
    }
}
