using System;
using Volo.Abp.Data;

namespace Volo.Payment.Requests
{
    [Serializable]
    public class PaymentRequestProductDto : IHasExtraProperties
    {
        public Guid PaymentRequestId { get; set; }

        public string Code { get; set; }

        public string Name { get; set; }

        public float UnitPrice { get; set; }

        public int Count { get; set; }

        public float TotalPrice { get; set; }

        public ExtraPropertyDictionary ExtraProperties { get; set; }

        public PaymentRequestProductDto()
        {
            ExtraProperties = new ExtraPropertyDictionary();
        }
    }
}
