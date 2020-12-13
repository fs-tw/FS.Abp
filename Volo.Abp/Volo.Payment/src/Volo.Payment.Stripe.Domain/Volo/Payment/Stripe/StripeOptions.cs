using System.Collections.Generic;

namespace Volo.Payment.Stripe
{
    public class StripeOptions
    {
        public string PublishableKey { get; set; }

        public string SecretKey { get; set; }

        public string Currency { get; set; }

        public string Locale { get; set; }

        public List<string> PaymentMethodTypes { get; set; }

        public bool Recommended { get; set; }

        public List<string> ExtraInfos { get; set; }

        public StripeOptions()
        {
            Currency = "USD";
            Locale = "auto";

            PaymentMethodTypes = new List<string>
            {
                "card"
            };

            ExtraInfos = new List<string>();
        }
    }
}
