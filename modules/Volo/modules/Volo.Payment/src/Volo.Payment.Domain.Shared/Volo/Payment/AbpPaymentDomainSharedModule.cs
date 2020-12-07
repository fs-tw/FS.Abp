using Volo.Abp;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using Volo.Payment.Localization;

namespace Volo.Payment
{
    [DependsOn(
        typeof(AbpLocalizationModule),
        typeof(AbpDddDomainModule)
        )]
    public class AbpPaymentDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources.Add<PaymentResource>("en");
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
