using System.Collections.Generic;

namespace Volo.Payment.Payu
{
    public class PayuOptions
    {
        public string Merchant { get; set; }

        public string Signature { get; set; }

        public string LanguageCode { get; set; }

        public string CurrencyCode { get; set; }

        public int VatRate { get; set; }

        public string PriceType { get; set; }

        public int Shipping { get; set; }

        public string Installment { get; set; }

        public string TestOrder { get; set; }

        public string Debug { get; set; }

        public bool Recommended { get; set; }

        public List<string> ExtraInfos { get; set; }

        public string PrePaymentCheckoutButtonStyle { get; set; }

        public PayuOptions()
        {
            ExtraInfos = new List<string>();
        }
    }
}