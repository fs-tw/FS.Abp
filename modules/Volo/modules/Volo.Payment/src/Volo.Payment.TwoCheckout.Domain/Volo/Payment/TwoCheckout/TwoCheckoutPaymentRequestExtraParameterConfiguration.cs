using JetBrains.Annotations;

namespace Volo.Payment.TwoCheckout
{
    public class TwoCheckoutPaymentRequestExtraParameterConfiguration
    {
        /// <summary>
        /// Currency code ex: USD, EUR
        /// </summary>
        [CanBeNull]
        public string Currency { get; set; }

        /// <summary>
        /// Currency code ex: en, tr
        /// </summary>
        [CanBeNull]
        public string Language { get; set; }


        [CanBeNull]
        public string AdditionalCallbackParameters { get; set; }
    }
}
