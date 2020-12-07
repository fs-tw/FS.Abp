using System.Collections.Generic;
using Volo.Abp.DependencyInjection;
using Volo.Payment.Gateways;
using Volo.Payment.Requests;

namespace Volo.Payment
{
    public class TestPaymentGateway : IPaymentGateway, ITransientDependency
    {
        public bool IsValid(PaymentRequest paymentRequest, Dictionary<string, string> properties)
        {
            return true;
        }
    }
}