using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Volo.Abp.Sms.Twilio.ConsoleTest
{
    public class AppHostedService : IHostedService
    {
        private const string ToPhoneNumber = "<Enter your target phone number>";

        public async Task StartAsync(CancellationToken cancellationToken)
        {
            using (var app = AbpApplicationFactory.Create<AbpTwilioConsoleTestModule>())
            {
                app.Initialize();

                var twilioSmsService = app.ServiceProvider.GetService<ITwilioSmsService>();

                await twilioSmsService.SendSmsAsync(ToPhoneNumber, "The current time is: " + DateTime.Now.ToLongTimeString());

                app.Shutdown();
            }

            await Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
    }
}
