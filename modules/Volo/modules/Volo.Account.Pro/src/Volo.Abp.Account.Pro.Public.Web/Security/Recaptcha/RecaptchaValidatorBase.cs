using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;
using Volo.Abp.Account.Localization;
using Volo.Abp.Account.Security.Recaptcha;
using Volo.Abp.Json;

namespace Volo.Abp.Account.Public.Web.Security.Recaptcha
{
    public abstract class RecaptchaValidatorBase: IRecaptchaValidator
    {
        public const string RecaptchaResponseKey = "g-recaptcha-response";

        public ILogger<RecaptchaValidatorBase> Logger { get; }

        protected IHttpContextAccessor HttpContextAccessor { get; }

        protected IStringLocalizer<AccountResource> StringLocalizer { get; }

        protected IJsonSerializer JsonSerializer { get; }

        public RecaptchaValidatorBase(
            IHttpContextAccessor httpContextAccessor,
            IStringLocalizer<AccountResource> stringLocalizer,
            IJsonSerializer jsonSerializer)
        {
            HttpContextAccessor = httpContextAccessor;
            StringLocalizer = stringLocalizer;
            JsonSerializer = jsonSerializer;

            Logger = NullLogger<RecaptchaValidatorBase>.Instance;
        }

        public abstract Task ValidateAsync(string captchaResponse);
    }
}
