using System.Collections.Generic;

namespace Volo.Payment
{
    public class PaymentGatewayWebConfigurationDictionary : Dictionary<string, PaymentGatewayWebConfiguration>
    {
        public void Add(PaymentGatewayWebConfiguration gatewayConfiguration)
        {
            this[gatewayConfiguration.Name] = gatewayConfiguration;
        }
    }
}