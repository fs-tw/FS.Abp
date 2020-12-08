namespace Volo.Payment.Payu
{
    public class PurchaseParameter
    {
        public string Key { get; set; }

        public string Value { get; set; }

        public bool ExcludeFromHash { get; set; }

        public PurchaseParameter(string key, string value, bool excludeFromHash = false)
        {
            Key = key;
            Value = value;
            ExcludeFromHash = excludeFromHash;
        }
    }
}
