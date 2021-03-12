using Localization.Resources.AbpUi;
using FS.FormManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.FormManagement
{
    [DependsOn(
        typeof(FormManagementApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class FormManagementHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(FormManagementHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<FormManagementResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
