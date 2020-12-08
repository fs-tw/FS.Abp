using System.Threading.Tasks;

namespace Volo.Abp.Sms.Twilio.ConsoleTest
{
    public interface ITwilioSmsService
    {
        Task SendSmsAsync(string toPhoneNumber, string message);
    }
}