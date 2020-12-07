using JetBrains.Annotations;
using System;
using System.Collections.Generic;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities.Auditing;

namespace Volo.Payment.Requests
{
    public class PaymentRequest : CreationAuditedAggregateRoot<Guid>
    {
        public virtual ICollection<PaymentRequestProduct> Products { get; private set; }

        public PaymentRequestState State { get; private set; }

        /// <summary>
        /// Currency code ex: USD, EUR
        /// </summary>
        [CanBeNull]
        public string Currency { get; set; }

        [CanBeNull]
        public string Gateway { get; set; }

        [CanBeNull]
        public string FailReason { get; private set; }

        private PaymentRequest()
        {

        }

        public PaymentRequest(Guid id)
        {
            Id = id;
            Products = new List<PaymentRequestProduct>();
        }

        public PaymentRequestProduct AddProduct(
            [NotNull] string code,
            [NotNull] string name,
            float unitPrice,
            int count = 1,
            float? totalPrice = null,
            Dictionary<string, IPaymentRequestProductExtraParameterConfiguration> extraProperties = null)
        {
            var product = new PaymentRequestProduct(
                Id,
                code,
                name,
                unitPrice,
                count: count,
                totalPrice: totalPrice
            );

            if (extraProperties != null)
            {
                foreach (var extraProperty in extraProperties)
                {
                    product.SetProperty(extraProperty.Key, extraProperty.Value);
                }
            }

            Products.Add(product);

            return product;
        }

        public void Complete(bool triggerEvent = true)
        {
            if (State != PaymentRequestState.Waiting)
            {
                throw new ApplicationException(
                    $"Can not complete a payment in '{State}' state!"
                );
            }

            State = PaymentRequestState.Completed;

            if (triggerEvent)
            {
                AddDistributedEvent(GetDistributedEventData());
            }
        }

        private object GetDistributedEventData()
        {
            var productEtos = new List<PaymentRequestProductCompletedEto>();

            foreach (var product in Products)
            {
                productEtos.Add(new PaymentRequestProductCompletedEto()
                {
                    Code = product.Code,
                    Count = product.Count,
                    Name = product.Name
                });
            }

            var paymentRequest = new PaymentRequestCompletedEto(
                Id,
                Gateway,
                Currency,
                productEtos
            );

            foreach (var extraProperty in ExtraProperties)
            {
                paymentRequest.Properties[extraProperty.Key] = extraProperty.Value;
            }

            return paymentRequest;
        }

        public void Failed([CanBeNull] string reason = null)
        {
            if (State != PaymentRequestState.Waiting)
            {
                throw new ApplicationException(
                    $"Can not fail a payment in '{State}' state!"
                );
            }

            State = PaymentRequestState.Failed;
            FailReason = reason;
        }

    }
}
