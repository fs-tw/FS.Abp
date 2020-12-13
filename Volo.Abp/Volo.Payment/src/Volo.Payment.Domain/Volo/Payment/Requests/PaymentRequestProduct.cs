using System;
using System.Collections.Generic;
using JetBrains.Annotations;
using Volo.Abp;
using Volo.Abp.Data;
using Volo.Abp.Domain.Entities;

namespace Volo.Payment.Requests
{
    public class PaymentRequestProduct : Entity, IHasExtraProperties
    {
        public Guid PaymentRequestId { get; private set; }

        [NotNull]
        public string Code { get; private set; }

        [NotNull]
        public string Name { get; private set; }

        public float UnitPrice { get; private set; }

        public int Count { get; private set; }

        public float TotalPrice { get; private set; }

        public ExtraPropertyDictionary ExtraProperties { get; protected set; }

        private PaymentRequestProduct()
        {
            ExtraProperties = new ExtraPropertyDictionary();
        }

        internal PaymentRequestProduct(
            Guid paymentRequestId,
            [NotNull] string code,
            [NotNull] string name,
            float unitPrice,
            int count = 1,
            float? totalPrice = null)
        {
            PaymentRequestId = paymentRequestId;
            Code = Check.NotNullOrWhiteSpace(code, nameof(code));
            Name = Check.NotNullOrWhiteSpace(name, nameof(name));
            UnitPrice = unitPrice;
            Count = count;
            TotalPrice = totalPrice ?? (unitPrice * count);
            ExtraProperties = new ExtraPropertyDictionary();
        }

        public override object[] GetKeys()
        {
            return new object[] { PaymentRequestId, Code };
        }
    }
}
