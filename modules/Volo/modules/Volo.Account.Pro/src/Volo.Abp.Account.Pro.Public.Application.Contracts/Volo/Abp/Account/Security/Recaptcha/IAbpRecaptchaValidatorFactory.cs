using System.Threading.Tasks;

namespace Volo.Abp.Account.Security.Recaptcha
{
    public interface IAbpRecaptchaValidatorFactory
    {
        Task<IRecaptchaValidator> CreateAsync();
    }
}
