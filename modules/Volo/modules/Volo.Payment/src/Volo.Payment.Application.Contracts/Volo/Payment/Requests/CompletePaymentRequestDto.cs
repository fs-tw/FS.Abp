using System;
using System.Collections.Generic;

namespace Volo.Payment.Requests
{
    public class CompletePaymentRequestDto
    {
        public Guid Id { get; set; }

        public string GateWay { get; set; }

        public Dictionary<string, string> Properties { get; set; }
    }
}