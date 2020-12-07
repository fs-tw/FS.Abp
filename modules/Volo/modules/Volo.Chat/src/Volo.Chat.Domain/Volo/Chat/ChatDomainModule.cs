using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Domain;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.SettingManagement;
using Volo.Abp.Users;
using Volo.Chat.Localization;

namespace Volo.Chat
{
    [DependsOn(
        typeof(ChatDomainSharedModule),
        typeof(AbpDddDomainModule),
        typeof(AbpSettingManagementDomainModule),
        typeof(AbpUsersDomainModule)
        )]
    public class ChatDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Volo.Chat", typeof(ChatResource));
            });
        }
    }
}
