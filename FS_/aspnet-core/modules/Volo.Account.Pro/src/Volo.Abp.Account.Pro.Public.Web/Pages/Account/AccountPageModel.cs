using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Owl.reCAPTCHA;
using Volo.Abp.Account.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.Abp.Identity;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Volo.Abp.Account.Public.Web.Pages.Account
{
    public abstract class AccountPageModel : AbpPageModel
    {
        public IAccountAppService AccountAppService { get; set; }
        public SignInManager<IdentityUser> SignInManager { get; set; }
        public IdentityUserManager UserManager { get; set; }
        public IdentitySecurityLogManager IdentitySecurityLogManager { get; set; }
        public IIdentityLinkUserAppService IdentityLinkUserAppService { get; set; }
        public IOptions<IdentityOptions> IdentityOptions { get; set; }
        public IOptionsSnapshot<reCAPTCHAOptions> ReCaptchaOptions { get; set; }

        protected AccountPageModel()
        {
            ObjectMapperContext = typeof(AbpAccountPublicWebModule);
            LocalizationResourceType = typeof(AccountResource);
        }

        protected RedirectResult RedirectSafely(string returnUrl, string returnUrlHash = null)
        {
            return Redirect(GetRedirectUrl(returnUrl, returnUrlHash));
        }

        protected virtual string GetRedirectUrl(string returnUrl, string returnUrlHash = null)
        {
            returnUrl = NormalizeReturnUrl(returnUrl);

            if (!returnUrlHash.IsNullOrWhiteSpace())
            {
                returnUrl = returnUrl + returnUrlHash;
            }

            return returnUrl;
        }

        private string NormalizeReturnUrl(string returnUrl)
        {
            if (returnUrl.IsNullOrEmpty())
            {
                return GetAppHomeUrl();
            }

            if (Url.IsLocalUrl(returnUrl))
            {
                return returnUrl;
            }

            return GetAppHomeUrl();
        }

        protected virtual void CheckCurrentTenant(Guid? tenantId)
        {
            if (CurrentTenant.Id != tenantId)
            {
                throw new ApplicationException(
                    $"Current tenant is different than given tenant. CurrentTenant.Id: {CurrentTenant.Id}, given tenantId: {tenantId}"
                );
            }
        }

        protected virtual string GetAppHomeUrl()
        {
            return "~/"; //TODO: ???
        }
    }
}
