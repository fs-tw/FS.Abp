using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Stripe;
using Volo.Abp;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;

namespace Volo.Payment.Stripe
{
    public class AbpPaymentStripeDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<PaymentOptions>(options =>
            {
                options.Gateways.Add(
                    new PaymentGatewayConfiguration(
                        StripeConsts.GatewayName,
                        new FixedLocalizableString("Stripe"),
                        typeof(StripePaymentGateway)
                    )
                );
            });

            var configuration = context.Services.GetConfiguration();
            Configure<StripeOptions>(configuration.GetSection("Payment:Stripe"));
        }

        public override void OnPreApplicationInitialization(ApplicationInitializationContext context)
        {
            var options = context.ServiceProvider.GetRequiredService<IOptions<StripeOptions>>().Value;
            StripeConfiguration.ApiKey = options.SecretKey;
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentStripeDomainModule>(context);
        }
    }
}
