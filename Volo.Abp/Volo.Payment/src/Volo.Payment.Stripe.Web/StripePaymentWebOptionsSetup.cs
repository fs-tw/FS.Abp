using System;
using Microsoft.Extensions.Options;

namespace Volo.Payment.Stripe
{
    public class StripePaymentWebOptionsSetup : IConfigureOptions<PaymentWebOptions>
    {
        protected StripeOptions StripeOptions { get; }

        public StripePaymentWebOptionsSetup(IOptions<StripeOptions> stripeOptions)
        {
            StripeOptions = stripeOptions.Value;
        }

        public void Configure(PaymentWebOptions options)
        {
            options.Gateways.Add(
                new PaymentGatewayWebConfiguration(
                    StripeConsts.GatewayName,
                    StripeConsts.PrePaymentUrl,
                    options.RootUrl.RemovePostFix("/") + StripeConsts.PostPaymentUrl,
                    StripeOptions.Recommended,
                    StripeOptions.ExtraInfos
                )
            );
        }
    }
}
