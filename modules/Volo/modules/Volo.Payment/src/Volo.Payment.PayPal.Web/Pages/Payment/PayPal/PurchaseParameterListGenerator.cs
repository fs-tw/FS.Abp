using System;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.Payment.PayPal;
using Volo.Payment.Requests;

namespace Volo.Payment.Paypal.Pages.Payment.PayPal
{
    public class PurchaseParameterListGenerator : IPurchaseParameterListGenerator, ITransientDependency
    {
        private readonly PayPalOptions _options;

        public PurchaseParameterListGenerator(
            IOptions<PayPalOptions> options)
        {
            _options = options.Value;
        }

        public PayPalPaymentRequestExtraParameterConfiguration GetExtraParameterConfiguration(
            PaymentRequestWithDetailsDto paymentRequest)
        {
            return GetPaymentRequestExtraPropertyConfiguration(paymentRequest);
        }

        private PayPalPaymentRequestExtraParameterConfiguration GetPaymentRequestExtraPropertyConfiguration(
            PaymentRequestWithDetailsDto paymentRequest)
        {
            var configuration = new PayPalPaymentRequestExtraParameterConfiguration
            {
                CurrencyCode = _options.CurrencyCode,
                Locale = _options.Locale
            };

            if (!paymentRequest.ExtraProperties.ContainsKey(PayPalConsts.GatewayName))
            {
                return configuration;
            }

            var json = paymentRequest.ExtraProperties[PayPalConsts.GatewayName].ToString();
            var overrideConfiguration = Newtonsoft.Json.JsonConvert
                .DeserializeObject<PayPalPaymentRequestExtraParameterConfiguration>(json);

            if (!overrideConfiguration.CurrencyCode.IsNullOrWhiteSpace())
            {
                configuration.CurrencyCode = overrideConfiguration.CurrencyCode;
            }

            if (!overrideConfiguration.Locale.IsNullOrWhiteSpace())
            {
                configuration.Locale = overrideConfiguration.Locale;
            }

            if (!overrideConfiguration.AdditionalCallbackParameters.IsNullOrEmpty())
            {
                configuration.AdditionalCallbackParameters = overrideConfiguration.AdditionalCallbackParameters;
            }

            return configuration;
        }
    }
}