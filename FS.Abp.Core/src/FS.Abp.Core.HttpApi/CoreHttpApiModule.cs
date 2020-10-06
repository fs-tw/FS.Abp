using Localization.Resources.AbpUi;
using FS.Abp.Core.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Mvc;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class CoreHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(CoreHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AbpCoreResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });

            Configure<MvcNewtonsoftJsonOptions>(options =>
            {

                options.SerializerSettings.Converters.Add(new FS.Abp.CodeSettings.DtoWithSettingsConverter());
            });
        }
    }
}
