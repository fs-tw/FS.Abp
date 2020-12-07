using System;
using System.Collections.Generic;
using Volo.Abp.Domain.Entities.Events.Distributed;

namespace Volo.Payment.Requests
{
    [Serializable]
    public class PaymentRequestCompletedEto : EtoBase
    {
        public Guid Id { get; }

        public string Gateway { get; set; }

        public string Currency { get; set; }

        public List<PaymentRequestProductCompletedEto> Products { get; set; }

        private PaymentRequestCompletedEto()
        {
            //Default constructor is needed for deserialization.
        }

        public PaymentRequestCompletedEto(
            Guid id, 
            string gateway, 
            string currency, 
            List<PaymentRequestProductCompletedEto> products)
        {
            Id = id;
            Gateway = gateway;
            Currency = Currency;
            Products = products;
        }
    }

    [Serializable]
    public class PaymentRequestProductCompletedEto : EtoBase
    {
        public string Code { get; set; }

        public string Name { get; set; }

        public int Count { get; set; }
    }
}
