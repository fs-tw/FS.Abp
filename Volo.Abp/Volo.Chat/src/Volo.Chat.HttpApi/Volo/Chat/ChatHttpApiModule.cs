using Localization.Resources.AbpUi;
using Volo.Chat.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace Volo.Chat
{
    [DependsOn(
        typeof(ChatApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class ChatHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(ChatHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<ChatResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}
