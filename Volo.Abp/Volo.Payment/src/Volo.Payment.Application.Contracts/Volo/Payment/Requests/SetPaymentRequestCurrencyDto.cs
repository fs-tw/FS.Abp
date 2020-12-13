using System;

namespace Volo.Payment.Requests
{
    public class SetPaymentRequestCurrencyDto
    {
        public Guid Id { get; set; }

        public string Currency { get; set; }
    }
}