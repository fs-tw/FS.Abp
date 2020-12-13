using System;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using PayPalCheckoutSdk.Core;
using Volo.Abp;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;

namespace Volo.Payment.PayPal
{
    public class AbpPaymentPayPalDomainModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<PaymentOptions>(options =>
            {
                options.Gateways.Add(
                    new PaymentGatewayConfiguration(
                        PayPalConsts.GatewayName,
                        new FixedLocalizableString("PayPal"),
                        typeof(PayPalPaymentGateway)
                    )
                );
            });

            var configuration = context.Services.GetConfiguration();
            Configure<PayPalOptions>(configuration.GetSection("Payment:PayPal"));

            context.Services.AddTransient(provider =>
            {
                var options = provider.GetService<IOptions<PayPalOptions>>().Value;

                if (options.Environment.IsNullOrWhiteSpace() || options.Environment == PayPalConsts.Environment.Sandbox)
                {
                    return new PayPalHttpClient(new SandboxEnvironment(options.ClientId, options.Secret));
                }

                return new PayPalHttpClient(new LiveEnvironment(options.ClientId, options.Secret));
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<AbpPaymentPayPalDomainModule>(context);
        }
    }
}
