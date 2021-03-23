using Localization.Resources.AbpUi;
using FS.Abp.Authentication.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AuthenticationApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class AuthenticationHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(AuthenticationHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AuthenticationResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
