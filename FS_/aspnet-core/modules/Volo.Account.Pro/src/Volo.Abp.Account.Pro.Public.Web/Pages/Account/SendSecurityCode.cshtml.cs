using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Volo.Abp.Emailing;
using Volo.Abp.Sms;
using Volo.Abp.Uow;

namespace Volo.Abp.Account.Public.Web.Pages.Account
{
    public class SendSecurityCodeModel : AccountPageModel
    {
        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string ReturnUrl { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string ReturnUrlHash { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public bool RememberMe { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid? LinkUserId { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid? LinkTenantId { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string LinkToken { get; set; }

        public List<SelectListItem> Providers { get; set; }

        [BindProperty]
        public string SelectedProvider { get; set; }

        protected IEmailSender EmailSender { get; }

        protected ISmsSender SmsSender { get; }

        public SendSecurityCodeModel(IEmailSender emailSender, ISmsSender smsSender)
        {
            EmailSender = emailSender;
            SmsSender = smsSender;
        }

        [UnitOfWork]
        public virtual async Task<IActionResult> OnGetAsync()
        {
            var user = await SignInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                return RedirectToPage("./Login");
            }

            CheckCurrentTenant(user.TenantId);
            //TODO: CheckCurrentTenant(await SignInManager.GetVerifiedTenantIdAsync()); ???

            Providers = (await UserManager.GetValidTwoFactorProvidersAsync(user))
                .Select(userProvider =>
                    new SelectListItem
                    {
                        Text = userProvider,
                        Value = userProvider
                    }).ToList();

            return Page();
        }

        [UnitOfWork]
        public virtual async Task<IActionResult> OnPostAsync()
        {
            var user = await SignInManager.GetTwoFactorAuthenticationUserAsync();
            if (user == null)
            {
                return RedirectToAction("Login");
            }

            CheckCurrentTenant(user.TenantId);
            //TODO: CheckCurrentTenant(await SignInManager.GetVerifiedTenantIdAsync()); ???

            if (SelectedProvider != TwoFactorProviders.GoogleAuthenticator)
            {
                var code = await UserManager.GenerateTwoFactorTokenAsync(user, SelectedProvider);
                var message = L["EmailSecurityCodeBody", code];

                if (SelectedProvider == TwoFactorProviders.Email)
                {
                    await EmailSender.SendAsync(await UserManager.GetEmailAsync(user), L["EmailSecurityCodeSubject"], message);
                }
                else if (SelectedProvider == TwoFactorProviders.Phone)
                {
                    await SmsSender.SendAsync(await UserManager.GetPhoneNumberAsync(user), message);
                }
            }

            return RedirectToPage("./VerifySecurityCode", new
            {
                provider = SelectedProvider,
                returnUrl = ReturnUrl,
                returnUrlHash = ReturnUrlHash,
                rememberMe = RememberMe,
                linkUserId = LinkUserId,
                linkTenantId = LinkTenantId,
                linkToken = LinkToken
            });
        }
    }
}
