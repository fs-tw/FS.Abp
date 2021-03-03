using Localization.Resources.AbpUi;
using FS.LineNotify.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(LineNotifyApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class LineNotifyHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(LineNotifyHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<LineNotifyResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
