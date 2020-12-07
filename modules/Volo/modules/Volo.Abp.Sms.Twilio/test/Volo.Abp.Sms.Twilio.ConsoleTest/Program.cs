using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Volo.Abp.Sms.Twilio.ConsoleTest
{
    internal class Program
    {
        /*
          Twilio allows you to create a free trial to send test SMS.
          Get your Twilio AccountSId, AuthToken, FromNumber from https://www.twilio.com/try-twilio
          And enter these values and target phone number in the appsettings.json of this project.
        */

        private static async Task Main(string[] args)
        {
            Console.WriteLine("Initializing...");

            await CreateHostBuilder(args).RunConsoleAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            return Host.CreateDefaultBuilder(args)
                .ConfigureServices((hostContext, services) =>
                {
                    services.AddHostedService<AppHostedService>();
                });
        }
    }
}
