using System.Collections.Generic;
using JetBrains.Annotations;

namespace Volo.Payment.Stripe
{
    public class StripePaymentRequestExtraParameterConfiguration
    {
        public string Currency { get; set; }

        public string Locale { get; set; }

        public List<string> PaymentMethodTypes { get; set; }

        [CanBeNull]
        public string AdditionalCallbackParameters { get; set; }
    }
}
