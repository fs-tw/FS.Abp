using System.Threading.Tasks;

namespace Volo.Abp.Account.Security.Recaptcha
{
    public interface IRecaptchaValidator
    {
        Task ValidateAsync(string captchaResponse);
    }
}
