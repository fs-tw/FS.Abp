using Localization.Resources.AbpUi;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.FeatureManagement;
using Volo.Abp.FeatureManagement.Localization;
using Volo.Abp.Modularity;
using Volo.Saas.Localization;
using Microsoft.Extensions.DependencyInjection;

namespace Volo.Saas.Host
{
    [DependsOn(
        typeof(SaasHostApplicationContractsModule),
        typeof(AbpFeatureManagementHttpApiModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class SaasHostHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(SaasHostHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<SaasResource>()
                    .AddBaseTypes(
                        typeof(AbpUiResource),
                        typeof(AbpFeatureManagementResource)
                    );
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<SaasHostHttpApiModule>(context);
        }
    }
}
