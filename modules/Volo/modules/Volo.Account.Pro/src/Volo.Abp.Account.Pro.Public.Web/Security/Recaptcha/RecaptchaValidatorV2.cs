using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Owl.reCAPTCHA;
using Owl.reCAPTCHA.v2;
using Volo.Abp.Account.Localization;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Json;

namespace Volo.Abp.Account.Public.Web.Security.Recaptcha
{
    [ExposeServices(typeof(RecaptchaValidatorV2))]
    public class RecaptchaValidatorV2: RecaptchaValidatorBase, ITransientDependency
    {
        protected IreCAPTCHASiteVerifyV2 ReCAPTCHASiteVerifyV2 { get; }

        public RecaptchaValidatorV2(
            IHttpContextAccessor httpContextAccessor,
            IStringLocalizer<AccountResource> stringLocalizer,
            IJsonSerializer jsonSerializer,
            IreCAPTCHASiteVerifyV2 reCaptchaSiteVerifyV2) :
            base(httpContextAccessor,
                stringLocalizer,
                jsonSerializer)
        {
            ReCAPTCHASiteVerifyV2 = reCaptchaSiteVerifyV2;
        }

        public override async Task ValidateAsync(string captchaResponse)
        {
            var httpContext = HttpContextAccessor.HttpContext;
            if (httpContext == null)
            {
                throw new Exception("RecaptchaValidator should be used in a valid HTTP context!");
            }

            if (captchaResponse.IsNullOrEmpty())
            {
                throw new UserFriendlyException(StringLocalizer["CaptchaCanNotBeEmpty"]);
            }

            var response = await ReCAPTCHASiteVerifyV2.Verify(new reCAPTCHASiteVerifyRequest
            {
                Response = captchaResponse,
                RemoteIp = httpContext.Connection?.RemoteIpAddress?.ToString()
            });

            if (!response.Success)
            {
                Logger.LogWarning(JsonSerializer.Serialize(response));
                throw new UserFriendlyException(StringLocalizer["IncorrectCaptchaAnswer"]);
            }
        }

    }
}
