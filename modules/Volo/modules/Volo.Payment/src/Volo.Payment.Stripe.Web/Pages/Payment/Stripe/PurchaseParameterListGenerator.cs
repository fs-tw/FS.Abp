using System;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Timing;
using Volo.Payment.Requests;

namespace Volo.Payment.Stripe.Pages.Payment.Stripe
{
    public class PurchaseParameterListGenerator : IPurchaseParameterListGenerator, ITransientDependency
    {
        private readonly IClock _clock;
        private readonly StripeOptions _options;

        public PurchaseParameterListGenerator(
            IClock clock,
            IOptions<StripeOptions> options)
        {
            _clock = clock;
            _options = options.Value;
        }

        public StripePaymentRequestExtraParameterConfiguration GetExtraParameterConfiguration(PaymentRequestWithDetailsDto paymentRequest)
        {
            return GetPaymentRequestExtraPropertyConfiguration(paymentRequest);
        }
        
        private StripePaymentRequestExtraParameterConfiguration GetPaymentRequestExtraPropertyConfiguration(PaymentRequestWithDetailsDto paymentRequest)
        {
            var configuration = new StripePaymentRequestExtraParameterConfiguration
            {
                Currency = _options.Currency,
                Locale = _options.Locale,
                PaymentMethodTypes = _options.PaymentMethodTypes
            };

            if (!paymentRequest.ExtraProperties.ContainsKey(StripeConsts.GatewayName))
            {
                return configuration;
            }

            var json = paymentRequest.ExtraProperties[StripeConsts.GatewayName].ToString();
            var overrideConfiguration = Newtonsoft.Json.JsonConvert.DeserializeObject<StripePaymentRequestExtraParameterConfiguration>(json);
            
            if (!overrideConfiguration.Currency.IsNullOrWhiteSpace())
            {
                configuration.Currency = overrideConfiguration.Currency;
            }

            if (!overrideConfiguration.Locale.IsNullOrWhiteSpace())
            {
                configuration.Locale = overrideConfiguration.Locale;
            }

            if (overrideConfiguration.PaymentMethodTypes.IsNullOrEmpty())
            {
                configuration.PaymentMethodTypes = overrideConfiguration.PaymentMethodTypes;
            }

            if (!overrideConfiguration.AdditionalCallbackParameters.IsNullOrEmpty())
            {
                configuration.AdditionalCallbackParameters = overrideConfiguration.AdditionalCallbackParameters;
            }

            return configuration;
        }

    }
}
