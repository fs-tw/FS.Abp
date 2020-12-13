using Volo.Abp.Localization;
using Volo.Abp.Modularity;

namespace Volo.Payment
{
    [DependsOn(
        typeof(AbpPaymentApplicationModule),
        typeof(PaymentDomainTestModule)
        )]
    public class PaymentApplicationTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<PaymentOptions>(options =>
            {
                options.Gateways.Add(
                    new PaymentGatewayConfiguration(
                        "Test",
                        new FixedLocalizableString("Test"),
                        typeof(TestPaymentGateway)
                    )
                );
            });
        }
    }
}
