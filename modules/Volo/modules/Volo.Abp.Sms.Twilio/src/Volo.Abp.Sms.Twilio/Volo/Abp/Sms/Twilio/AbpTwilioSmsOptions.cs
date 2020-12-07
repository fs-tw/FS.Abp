namespace Volo.Abp.Sms.Twilio
{
    public class AbpTwilioSmsOptions
    {
        public string AccountSId { get; set; }

        public string FromNumber { get; set; }

        public string AuthToken { get; set; }
    }
}