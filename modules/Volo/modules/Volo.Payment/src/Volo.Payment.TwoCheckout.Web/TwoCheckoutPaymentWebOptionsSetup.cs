using System;
using Microsoft.Extensions.Options;

namespace Volo.Payment.TwoCheckout
{
    public class TwoCheckoutPaymentWebOptionsSetup : IConfigureOptions<PaymentWebOptions>
    {
        protected TwoCheckoutOptions TwoCheckoutOptions { get; }

        public TwoCheckoutPaymentWebOptionsSetup(IOptions<TwoCheckoutOptions> twoCheckoutOptions)
        {
            TwoCheckoutOptions = twoCheckoutOptions.Value;
        }

        public void Configure(PaymentWebOptions options)
        {
            options.Gateways.Add(
                new PaymentGatewayWebConfiguration(
                    TwoCheckoutConsts.GatewayName,
                    TwoCheckoutConsts.PrePaymentUrl,
                    options.RootUrl.RemovePostFix("/") + TwoCheckoutConsts.PostPaymentUrl,
                    TwoCheckoutOptions.Recommended,
                    TwoCheckoutOptions.ExtraInfos
                )
            );
        }
    }
}
