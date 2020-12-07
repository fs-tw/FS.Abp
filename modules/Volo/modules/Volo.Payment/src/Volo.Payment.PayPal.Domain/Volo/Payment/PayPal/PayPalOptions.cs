using System.Collections.Generic;

namespace Volo.Payment.PayPal
{
    public class PayPalOptions
    {
        public string ClientId { get; set; }

        public string Secret { get; set; }

        public string CurrencyCode { get; set; }

        public string Locale { get; set; }

        /// <summary>
        /// "Sandbox" or "Live". Default value is "Sandbox"
        /// </summary>
        public string Environment { get; set; }

        public bool Recommended { get; set; }

        public List<string> ExtraInfos { get; set; }

        public PayPalOptions()
        {
            ExtraInfos = new List<string>();
            Environment = PayPalConsts.Environment.Sandbox;
        }
    }
}
