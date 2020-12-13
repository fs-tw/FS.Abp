using System;
using System.Collections.Generic;
using System.Linq;
using PayPalCheckoutSdk.Core;
using PayPalCheckoutSdk.Orders;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Threading;
using Volo.Payment.Gateways;
using Volo.Payment.Requests;

namespace Volo.Payment.PayPal
{
    public class PayPalPaymentGateway : IPaymentGateway, ITransientDependency
    {
        protected PayPalHttpClient PayPalHttpClient { get; }

        public PayPalPaymentGateway(PayPalHttpClient payPalHttpClient)
        {
            PayPalHttpClient = payPalHttpClient;
        }

        public bool IsValid(PaymentRequest paymentRequest, Dictionary<string, string> properties)
        {
            var orderId = properties["OrderId"];
            if (orderId.IsNullOrWhiteSpace())
            {
                throw new Exception("Empty OrderId.");
            }

            var request = new OrdersGetRequest(orderId);
            var order = AsyncHelper.RunSync(() => PayPalHttpClient.Execute(request)).Result<Order>();

            if (!order.Status.Equals("COMPLETED", StringComparison.InvariantCulture))
            {
                throw new Exception("Order not completed.");
            }

            return order.PurchaseUnits.First().ReferenceId == paymentRequest.Id.ToString();
        }
    }
}
