using System.Threading.Tasks;

namespace Volo.Abp.Account.Security.Recaptcha
{
    public class NullAbpRecaptchaValidatorFactory : IAbpRecaptchaValidatorFactory
    {
        public static NullAbpRecaptchaValidatorFactory Instance { get; } = new NullAbpRecaptchaValidatorFactory();

        public Task<IRecaptchaValidator> CreateAsync()
        {
            return Task.FromResult((IRecaptchaValidator) NullRecaptchaValidator.Instance);
        }
    }
}
