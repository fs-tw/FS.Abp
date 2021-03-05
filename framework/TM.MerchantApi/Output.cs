namespace TM.MerchantApi
{
    public class Output<TDataDto>
    {
        public short returnCode { get; set; }
        public string returnMessage { get; set; }
        public string responseId { get; set; }
        public long timestamp { get; set; }
        public TDataDto data { get; set; }
        public string verificationCode { get; set; }
    }
}