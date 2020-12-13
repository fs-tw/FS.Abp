using Volo.Abp;
using Volo.Payment.Localization;
using Volo.Abp.Application;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Payment
{
    [DependsOn(
        typeof(AbpPaymentDomainSharedModule),
        typeof(AbpDddApplicationModule)
        )]
    public class AbpPaymentApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpPaymentApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<PaymentResource>()
                    .AddVirtualJson("/Volo/Payment/Localization/ApplicationContracts");
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
