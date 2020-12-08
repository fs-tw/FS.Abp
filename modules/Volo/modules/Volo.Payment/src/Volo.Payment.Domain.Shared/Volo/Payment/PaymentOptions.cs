namespace Volo.Payment
{
    public class PaymentOptions
    {
        public PaymentGatewayConfigurationDictionary Gateways { get; }

        public PaymentOptions()
        {
            Gateways = new PaymentGatewayConfigurationDictionary();
        }
    }
}