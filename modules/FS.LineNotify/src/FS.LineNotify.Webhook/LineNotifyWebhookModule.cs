using Localization.Resources.AbpUi;
using FS.LineNotify.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.LineNotify.Webhook
{
    [DependsOn(
        typeof(LineNotifyDomainModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class LineNotifyWebhookModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {

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
