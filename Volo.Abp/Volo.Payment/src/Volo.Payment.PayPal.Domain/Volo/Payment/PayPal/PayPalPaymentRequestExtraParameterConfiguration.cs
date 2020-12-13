using JetBrains.Annotations;

namespace Volo.Payment.PayPal
{
    public class PayPalPaymentRequestExtraParameterConfiguration
    {
        public string CurrencyCode { get; set; }

        public string Locale { get; set; }

        [CanBeNull]
        public string AdditionalCallbackParameters { get; set; }
    }
}