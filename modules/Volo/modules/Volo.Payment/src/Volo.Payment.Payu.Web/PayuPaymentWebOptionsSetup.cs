using System;
using Microsoft.Extensions.Options;

namespace Volo.Payment.Payu
{
    public class PayuPaymentWebOptionsSetup : IConfigureOptions<PaymentWebOptions>
    {
        protected PayuOptions PayuOptions { get; }

        public PayuPaymentWebOptionsSetup(IOptions<PayuOptions> payuOptions)
        {
            PayuOptions = payuOptions.Value;
        }

        public void Configure(PaymentWebOptions options)
        {
            options.Gateways.Add(
                new PaymentGatewayWebConfiguration(
                    PayuConsts.GatewayName,
                    PayuConsts.PrePaymentUrl,
                    options.RootUrl.RemovePostFix("/") + PayuConsts.PostPaymentUrl,
                    PayuOptions.Recommended,
                    PayuOptions.ExtraInfos
                )
            );
        }
    }
}
