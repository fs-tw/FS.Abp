using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;

namespace Volo.Payment.TwoCheckout
{
    public class AbpPaymentTwoCheckoutDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<PaymentOptions>(options =>
            {
                options.Gateways.Add(
                    new PaymentGatewayConfiguration(
                        TwoCheckoutConsts.GatewayName,
                        new FixedLocalizableString("TwoCheckout"),
                        typeof(TwoCheckoutPaymentGateway)
                    )
                );
            });

            var configuration = context.Services.GetConfiguration();
            Configure<TwoCheckoutOptions>(configuration.GetSection("Payment:TwoCheckout"));
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentTwoCheckoutDomainModule>(context);
        }
    }
}
