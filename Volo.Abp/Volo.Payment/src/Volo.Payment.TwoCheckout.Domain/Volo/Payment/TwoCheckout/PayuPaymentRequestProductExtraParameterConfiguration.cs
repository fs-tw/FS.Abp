namespace Volo.Payment.TwoCheckout
{
    public class TwoCheckoutPaymentRequestProductExtraParameterConfiguration : IPaymentRequestProductExtraParameterConfiguration
    {
        /// <summary>
        /// 2Checkout product code
        /// </summary>
        public string ProductCode { get; set; }
    }
}