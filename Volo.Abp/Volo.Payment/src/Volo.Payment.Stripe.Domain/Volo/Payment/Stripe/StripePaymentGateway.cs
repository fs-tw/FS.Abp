using System;
using System.Collections.Generic;
using Stripe.Checkout;
using Volo.Abp.DependencyInjection;
using Volo.Payment.Gateways;
using Volo.Payment.Requests;

namespace Volo.Payment.Stripe
{
    public class StripePaymentGateway : IPaymentGateway, ITransientDependency
    {
        public bool IsValid(PaymentRequest paymentRequest, Dictionary<string, string> properties)
        {
            var sessionId = properties["SessionId"];
            if (sessionId.IsNullOrWhiteSpace())
            {
                throw new Exception("Empty SessionId.");
            }

            var sessionService = new SessionService();
            var session = sessionService.Get(sessionId);

            if (!session.PaymentStatus.Equals("paid", StringComparison.InvariantCulture))
            {
                throw new Exception("Session not paid.");
            }

            return session.Metadata["PaymentRequestId"] == paymentRequest.Id.ToString();
        }
    }
}
