using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.LineNotify.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(typeof(Volo.Abp.EventBus.RabbitMq.AbpEventBusRabbitMqModule))]
    public class LineNotifyDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<LineNotifyDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<LineNotifyResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/LineNotify");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("LineNotify", typeof(LineNotifyResource));
            });
        }
    }
}
