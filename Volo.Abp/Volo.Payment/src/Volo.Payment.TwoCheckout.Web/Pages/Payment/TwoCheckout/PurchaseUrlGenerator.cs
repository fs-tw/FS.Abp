using System;
using System.Linq;
using System.Net;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Timing;
using Volo.Payment.Requests;

namespace Volo.Payment.TwoCheckout.Pages.Payment.TwoCheckout
{
    public class PurchaseUrlGenerator : IPurchaseUrlGenerator, ITransientDependency
    {
        private readonly TwoCheckoutOptions _options;
        private readonly PaymentWebOptions _paymentGatewayOptions;

        public PurchaseUrlGenerator(
            IClock clock,
            IOptions<TwoCheckoutOptions> options,
            IOptions<PaymentWebOptions> paymentGatewayOptions)
        {
            _options = options.Value;
            _paymentGatewayOptions = paymentGatewayOptions.Value;
        }

        public string GetCurrency(PaymentRequestWithDetailsDto paymentRequest)
        {
            return _options.CurrencyCode;
        }

        public TwoCheckoutPaymentRequestExtraParameterConfiguration GetExtraParameterConfiguration(PaymentRequestWithDetailsDto paymentRequest)
        {
            var configuration = new TwoCheckoutPaymentRequestExtraParameterConfiguration
            {
                Currency = _options.CurrencyCode,
                Language = _options.LanguageCode
            };

            if (!paymentRequest.ExtraProperties.ContainsKey(TwoCheckoutConsts.GatewayName))
            {
                return configuration;
            }

            var json = paymentRequest.ExtraProperties[TwoCheckoutConsts.GatewayName].ToString();
            var overrideConfiguration = Newtonsoft.Json.JsonConvert.DeserializeObject<TwoCheckoutPaymentRequestExtraParameterConfiguration>(json);

            if (!overrideConfiguration.Currency.IsNullOrWhiteSpace())
            {
                configuration.Currency = overrideConfiguration.Currency;
            }

            if (!overrideConfiguration.Language.IsNullOrWhiteSpace())
            {
                configuration.Language = overrideConfiguration.Language;
            }

            if (!overrideConfiguration.AdditionalCallbackParameters.IsNullOrEmpty())
            {
                configuration.AdditionalCallbackParameters = overrideConfiguration.AdditionalCallbackParameters;
            }

            return configuration;
        }

        public string GetUrl(PaymentRequestWithDetailsDto paymentRequest)
        {
            var checkoutUrl = _options.CheckoutUrl + "?";

            checkoutUrl += "PRODS=" + GetTwoCheckoutProductCodes(paymentRequest) + "&";
            checkoutUrl += "QTY=" + GetTwoCheckoutProductCounts(paymentRequest) + "&";
            checkoutUrl += "BACK_REF=" + WebUtility.UrlEncode(_paymentGatewayOptions.Gateways[TwoCheckoutConsts.GatewayName].PostPaymentUrl + "?paymentRequestId=" + paymentRequest.Id) + "&";

            if (!_options.CurrencyCode.IsNullOrEmpty())
            {
                checkoutUrl += "CURRENCY=" + _options.CurrencyCode + "&";
            }

            if (!_options.LanguageCode.IsNullOrEmpty())
            {
                checkoutUrl += "LANGUAGES=" + _options.LanguageCode + "&";
            }

            return checkoutUrl.TrimEnd('&');
        }

        private string GetTwoCheckoutProductCodes(PaymentRequestWithDetailsDto paymentRequest)
        {
            return string.Join(",", paymentRequest.Products.Select(product => GetPaymentRequestProductExtraPropertyConfiguration(product).ProductCode));
        }

        private string GetTwoCheckoutProductCounts(PaymentRequestWithDetailsDto paymentRequest)
        {
            return string.Join(",", paymentRequest.Products.Select(product => product.Count));
        }

        private TwoCheckoutPaymentRequestProductExtraParameterConfiguration GetPaymentRequestProductExtraPropertyConfiguration(PaymentRequestProductDto product)
        {
            if (!product.ExtraProperties.ContainsKey(TwoCheckoutConsts.GatewayName))
            {
                throw new ArgumentException(message: "Two checkout extra parameters are not configured for this product !");
            }

            var json = product.ExtraProperties[TwoCheckoutConsts.GatewayName].ToString();
            var extraParameters = Newtonsoft.Json.JsonConvert.DeserializeObject<TwoCheckoutPaymentRequestProductExtraParameterConfiguration>(json);

            if (extraParameters.ProductCode.IsNullOrEmpty())
            {
                throw new ArgumentException(message: "Two checkout product code is not configured for this product !");
            }

            return new TwoCheckoutPaymentRequestProductExtraParameterConfiguration
            {
                ProductCode = extraParameters.ProductCode
            };
        }
    }
}
