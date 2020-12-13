namespace Volo.Payment.PayPal
{
    public class PayPalConsts
    {
        /// <summary>
        /// Value: "PayPal"
        /// </summary>
        public const string GatewayName = "PayPal";

        /// <summary>
        /// Value: "/Payment/PayPal/PrePayment"
        /// </summary>
        public const string PrePaymentUrl = "/Payment/PayPal/PrePayment";

        /// <summary>
        /// Value: "/Payment/PayPal/PostPayment"
        /// </summary>
        public const string PostPaymentUrl = "/Payment/PayPal/PostPayment";

        public class Environment
        {
            public const string Sandbox = "Sandbox";

            public const string Live = "Live";
        }
    }
}
