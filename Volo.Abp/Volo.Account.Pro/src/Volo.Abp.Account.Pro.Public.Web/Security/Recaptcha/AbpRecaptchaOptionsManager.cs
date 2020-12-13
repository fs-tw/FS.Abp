using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Owl.reCAPTCHA;
using Volo.Abp.Account.Settings;
using Volo.Abp.Options;
using Volo.Abp.Settings;

namespace Volo.Abp.Account.Public.Web.Security.Recaptcha
{
    public class AbpRecaptchaOptionsManager : AbpDynamicOptionsManager<reCAPTCHAOptions>
    {
        protected ISettingProvider SettingProvider { get; }

        public AbpRecaptchaOptionsManager(IOptionsFactory<reCAPTCHAOptions> factory, ISettingProvider settingProvider)
            : base(factory)
        {
            SettingProvider = settingProvider;
        }

        protected override async Task OverrideOptionsAsync(string name, reCAPTCHAOptions options)
        {
            options.VerifyBaseUrl = await GetSettingOrDefaultValue(AccountSettingNames.Captcha.VerifyBaseUrl, options.VerifyBaseUrl);
            options.SiteKey = await GetSettingOrDefaultValue(AccountSettingNames.Captcha.SiteKey, options.SiteKey);
            options.SiteSecret = await GetSettingOrDefaultValue(AccountSettingNames.Captcha.SiteSecret, options.SiteSecret);
        }

        protected virtual async Task<string> GetSettingOrDefaultValue(string name, string defaultValue)
        {
            var value = await SettingProvider.GetOrNullAsync(name);
            return value.IsNullOrWhiteSpace() ? defaultValue : value;
        }
    }
}
