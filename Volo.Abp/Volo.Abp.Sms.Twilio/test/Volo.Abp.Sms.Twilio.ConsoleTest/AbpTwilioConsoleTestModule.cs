using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Volo.Abp.Sms.Twilio.ConsoleTest
{
    [DependsOn(typeof(AbpTwilioSmsModule))]
    public class AbpTwilioConsoleTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();

            Configure<AbpTwilioSmsOptions>(
                configuration.GetSection("AbpTwilioSms")
            );
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<AbpTwilioSmsModule>(context);
        }
    }
}
