using System;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Account.Security.Recaptcha;
using Volo.Abp.Account.Settings;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Settings;

namespace Volo.Abp.Account.Public.Web.Security.Recaptcha
{
    public class AbpRecaptchaValidatorFactory : IAbpRecaptchaValidatorFactory , ITransientDependency
    {
        protected ISettingProvider SettingProvider { get; }
        protected IServiceProvider ServiceProvider { get; }

        public AbpRecaptchaValidatorFactory(
            ISettingProvider settingProvider,
            IServiceProvider serviceProvider)
        {
            SettingProvider = settingProvider;
            ServiceProvider = serviceProvider;
        }

        public virtual async Task<IRecaptchaValidator> CreateAsync()
        {
            switch (await SettingProvider.GetAsync<int>(AccountSettingNames.Captcha.Version))
            {
                case 3:
                    return ServiceProvider.GetService<RecaptchaValidatorV3>();
                case 2:
                    return ServiceProvider.GetService<RecaptchaValidatorV2>();
                default:
                    throw new ArgumentException(nameof(AccountSettingNames.Captcha.Version));
            }
        }
    }
}
