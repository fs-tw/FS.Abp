using JetBrains.Annotations;

namespace Volo.Payment.Payu
{
    public class PayuPaymentRequestExtraParameterConfiguration
    {
        /// <summary>
        /// Shipping fee
        /// </summary>
        public int? Shipping { get; set; }

        /// <summary>
        /// Currency code ex: USD, EUR
        /// </summary>
        [CanBeNull]
        public string Currency { get; set; }

        /// <summary>
        /// GROSS or NET
        /// </summary>
        [CanBeNull]
        public string PriceType { get; set; }

        /// <summary>
        /// Installment count
        /// </summary>
        [CanBeNull]
        public string Installment { get; set; }

        [CanBeNull]
        public string AdditionalCallbackParameters { get; set; }
    }
}
