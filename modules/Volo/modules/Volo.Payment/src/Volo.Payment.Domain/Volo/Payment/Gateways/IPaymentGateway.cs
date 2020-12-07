using System.Collections.Generic;
using Volo.Payment.Requests;

namespace Volo.Payment.Gateways
{
    public interface IPaymentGateway
    {
        bool IsValid(PaymentRequest paymentRequest, Dictionary<string, string> properties);
    }
}
