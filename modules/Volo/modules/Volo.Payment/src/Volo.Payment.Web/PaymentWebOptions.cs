using System.Collections.Generic;

namespace Volo.Payment
{
    public class PaymentWebOptions
    {
        public string CallbackUrl { get; set; }

        public string RootUrl { get; set; }

        public string GatewaySelectionCheckoutButtonStyle { get; set; }

        public PaymentGatewayWebConfigurationDictionary Gateways { get; }

        public PaymentWebOptions()
        {
            Gateways = new PaymentGatewayWebConfigurationDictionary();
        }
    }
}