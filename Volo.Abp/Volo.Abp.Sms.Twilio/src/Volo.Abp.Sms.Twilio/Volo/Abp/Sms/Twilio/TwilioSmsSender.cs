using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Sms.Twilio
{
    public class TwilioSmsSender : ISmsSender, ITransientDependency
    {
        protected static bool IsTwilioClientInitialized;
        protected static object SyncLock = new object();

        protected AbpTwilioSmsOptions Options { get; }

        public TwilioSmsSender(IOptionsSnapshot<AbpTwilioSmsOptions> options)
        {
            Options = options.Value;
            InitTwilioClientIfNeeds();
        }

        public virtual async Task SendAsync(SmsMessage smsMessage)
        {
            await MessageResource.CreateAsync(
                    body: smsMessage.Text,
                    @from: new global::Twilio.Types.PhoneNumber(Options.FromNumber),
                    to: new global::Twilio.Types.PhoneNumber(smsMessage.PhoneNumber)
                );
        }

        protected virtual void InitTwilioClientIfNeeds()
        {
            if (IsTwilioClientInitialized)
            {
                return;
            }

            lock (SyncLock)
            {
                if (IsTwilioClientInitialized)
                {
                    return;
                }

                CheckConfiguration();

                TwilioClient.Init(Options.AccountSId, Options.AuthToken);

                IsTwilioClientInitialized = true;
            }
        }

        protected virtual void CheckConfiguration()
        {
            CheckOptionNotNullOrWhiteSpace(Options.FromNumber, nameof(AbpTwilioSmsOptions.FromNumber));
            CheckOptionNotNullOrWhiteSpace(Options.AccountSId, nameof(AbpTwilioSmsOptions.AccountSId));
            CheckOptionNotNullOrWhiteSpace(Options.AuthToken, nameof(AbpTwilioSmsOptions.AuthToken));
        }

        protected virtual void CheckOptionNotNullOrWhiteSpace(string option, string optionName)
        {
            if (option.IsNullOrWhiteSpace())
            {
                throw new AbpException($"{optionName} option was not configured! Use {nameof(AbpTwilioSmsOptions)} to configure it.");
            }
        }
    }
}
