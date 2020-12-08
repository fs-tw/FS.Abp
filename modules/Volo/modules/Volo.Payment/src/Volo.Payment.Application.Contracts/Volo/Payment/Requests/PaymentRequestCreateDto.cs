using System;
using System.Collections.Generic;

namespace Volo.Payment.Requests
{
    [Serializable]
    public class PaymentRequestCreateDto
    {
        public List<PaymentRequestProductCreateDto> Products { get; set; }

        public Dictionary<string, object> ExtraProperties { get; set; }
        
        public PaymentRequestCreateDto()
        {
            Products = new List<PaymentRequestProductCreateDto>();
            ExtraProperties = new Dictionary<string, object>();
        }
    }
}