using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using FS.Abp.Authentication.Localization;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(FS.Abp.Authentication.AuthenticationDomainModule),
        typeof(Volo.Abp.IdentityServer.AbpIdentityServerDomainModule))]
    public class AuthenticationHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AuthenticationResource>();
            });
        }
    }
}
