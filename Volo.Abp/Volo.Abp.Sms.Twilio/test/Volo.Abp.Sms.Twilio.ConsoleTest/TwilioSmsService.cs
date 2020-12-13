using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Sms.Twilio.ConsoleTest
{
    public class TwilioSmsService : ITwilioSmsService, ITransientDependency
    {
        private readonly ISmsSender _smsSender;
        private readonly IConfiguration _configuration;

        public TwilioSmsService(ISmsSender smsSender, IConfiguration configuration)
        {
            _smsSender = smsSender;
            _configuration = configuration;
        }

        public async Task SendSmsAsync(string toPhoneNumber, string message)
        {
            try
            {
                Console.WriteLine("Sending SMS to {0}", _configuration["AbpTwilioSms:TargetPhoneNumber"]);

                await _smsSender.SendAsync(new SmsMessage(_configuration["AbpTwilioSms:TargetPhoneNumber"], message));

                Console.WriteLine("Sent successfully :)");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Cannot send the SMS: {0}", ex.Message);
            }
        }
    }
}