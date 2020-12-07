using System;
using System.Collections.Generic;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Data;

namespace Volo.Payment.Requests
{
    [Serializable]
    public class PaymentRequestWithDetailsDto : EntityDto<Guid>, IHasExtraProperties
    {
        public virtual List<PaymentRequestProductDto> Products { get; set; }

        /// <summary>
        /// Currency code ex: USD, EUR
        /// </summary>
        public string Currency { get; set; }

        public PaymentRequestState State { get; set; }

        public string FailReason { get; set; }

        public ExtraPropertyDictionary ExtraProperties { get; set; }
    }
}
