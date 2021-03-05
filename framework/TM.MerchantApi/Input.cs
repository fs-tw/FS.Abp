namespace TM.MerchantApi
{
    public class Input<TDataDto>
    {
        public string merchantId { get; set; }
        public string version { get; set; }
        public string requestId { get; set; }
        public long timestamp { get; set; }
        public string verificationCode { get; set; }
        public TDataDto data { get; set; }
    }
}