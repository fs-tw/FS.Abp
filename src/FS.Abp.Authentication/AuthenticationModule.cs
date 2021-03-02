using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using FS.Abp.Authentication.Localization;
using FS.Abp.Authentication.External;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(FS.Abp.Authentication.AuthenticationDomainModule),
        typeof(Volo.Abp.IdentityServer.AbpIdentityServerDomainModule))]
    public class AuthenticationModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IIdentityServerBuilder>(builder =>
            {
                builder.AddExtensionGrantValidator<ExternalLoginGrant>();
            });
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
