using System.Collections.Generic;

namespace Volo.Payment.TwoCheckout
{
    public class TwoCheckoutOptions
    {
        public string Signature { get; set; }

        public string CheckoutUrl { get; set; }

        public string LanguageCode { get; set; }

        public string CurrencyCode { get; set; }

        public bool Recommended { get; set; }

        public List<string> ExtraInfos { get; set; }

        public TwoCheckoutOptions()
        {
            ExtraInfos = new List<string>();
        }
    }
}