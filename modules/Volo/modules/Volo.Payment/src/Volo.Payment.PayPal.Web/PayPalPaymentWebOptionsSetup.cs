using System;
using Microsoft.Extensions.Options;

namespace Volo.Payment.PayPal
{
    public class PayPalPaymentWebOptionsSetup : IConfigureOptions<PaymentWebOptions>
    {
        protected PayPalOptions PayPalOptions { get; }

        public PayPalPaymentWebOptionsSetup(IOptions<PayPalOptions> payPalOptions)
        {
            PayPalOptions = payPalOptions.Value;
        }

        public void Configure(PaymentWebOptions options)
        {
            options.Gateways.Add(
                new PaymentGatewayWebConfiguration(
                    PayPalConsts.GatewayName,
                    PayPalConsts.PrePaymentUrl,
                    options.RootUrl.RemovePostFix("/") + PayPalConsts.PostPaymentUrl,
                    PayPalOptions.Recommended,
                    PayPalOptions.ExtraInfos
                )
            );
        }
    }
}
