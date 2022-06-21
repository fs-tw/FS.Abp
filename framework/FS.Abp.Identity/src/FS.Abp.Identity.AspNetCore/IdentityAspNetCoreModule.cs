using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.Identity;

[DependsOn(
    typeof(FS.Abp.Identity.IdentityDomainModule)
    )]
public class IdentityAspNetCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
    }
}
