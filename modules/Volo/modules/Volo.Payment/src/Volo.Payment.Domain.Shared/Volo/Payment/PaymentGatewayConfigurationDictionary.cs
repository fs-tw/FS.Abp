using System.Collections.Generic;

namespace Volo.Payment
{
    public class PaymentGatewayConfigurationDictionary : Dictionary<string, PaymentGatewayConfiguration>
    {
        public void Add(PaymentGatewayConfiguration gatewayConfiguration)
        {
            this[gatewayConfiguration.Name] = gatewayConfiguration;
        }
    }
}