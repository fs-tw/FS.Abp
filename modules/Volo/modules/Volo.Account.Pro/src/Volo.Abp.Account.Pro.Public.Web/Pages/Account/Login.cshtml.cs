using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Owl.reCAPTCHA;
using Volo.Abp.Account.Public.Web.Security.Recaptcha;
using Volo.Abp.Account.Security.Recaptcha;
using Volo.Abp.Account.ExternalProviders;
using Volo.Abp.Account.Settings;
using Volo.Abp.Auditing;
using Volo.Abp.Identity;
using Volo.Abp.Identity.AspNetCore;
using Volo.Abp.Reflection;
using Volo.Abp.Security.Claims;
using Volo.Abp.Settings;
using Volo.Abp.Uow;
using Volo.Abp.Validation;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Volo.Abp.Account.Public.Web.Pages.Account
{
    [DisableAuditing]
    public class LoginModel : AccountPageModel
    {
        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string ReturnUrl { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string ReturnUrlHash { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid? LinkUserId { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public Guid? LinkTenantId { get; set; }

        [HiddenInput]
        [BindProperty(SupportsGet = true)]
        public string LinkToken { get; set; }

        public bool IsLinkLogin { get; set; }

        [BindProperty]
        public LoginInputModel LoginInput { get; set; }

        public bool EnableLocalLogin { get; set; }

        public bool IsSelfRegistrationEnabled { get; set; }

        public bool ShowCancelButton { get; set; }

        public bool UseCaptcha { get; set; }

        //TODO: Why there is an ExternalProviders if only the VisibleExternalProviders is used.
        public IEnumerable<ExternalProviderModel> ExternalProviders { get; set; }
        public IEnumerable<ExternalProviderModel> VisibleExternalProviders => ExternalProviders.Where(x => !string.IsNullOrWhiteSpace(x.DisplayName));

        public bool IsExternalLoginOnly => EnableLocalLogin == false && ExternalProviders?.Count() == 1;
        public string ExternalLoginScheme => IsExternalLoginOnly ? ExternalProviders?.SingleOrDefault()?.AuthenticationScheme : null;

        protected readonly IAuthenticationSchemeProvider SchemeProvider;
        protected readonly AbpAccountOptions AccountOptions;
        protected readonly ICurrentPrincipalAccessor CurrentPrincipalAccessor;
        protected readonly IAbpRecaptchaValidatorFactory RecaptchaValidatorFactory;
        protected readonly IAccountExternalProviderAppService AccountExternalProviderAppService;

        public LoginModel(
            IAuthenticationSchemeProvider schemeProvider,
            IOptions<AbpAccountOptions> accountOptions,
            IAbpRecaptchaValidatorFactory recaptchaValidatorFactory,
            IAccountExternalProviderAppService accountExternalProviderAppService,
            ICurrentPrincipalAccessor currentPrincipalAccessor,
            IOptions<IdentityOptions> identityOptions,
            IOptionsSnapshot<reCAPTCHAOptions> reCaptchaOptions)
        {
            SchemeProvider = schemeProvider;
            AccountExternalProviderAppService = accountExternalProviderAppService;
            AccountOptions = accountOptions.Value;
            CurrentPrincipalAccessor = currentPrincipalAccessor;
            IdentityOptions = identityOptions;
            RecaptchaValidatorFactory = recaptchaValidatorFactory;
            ReCaptchaOptions = reCaptchaOptions;
        }

        public virtual async Task OnGetAsync()
        {
            LoginInput = new LoginInputModel();

            ExternalProviders = await GetExternalProviders();

            EnableLocalLogin = await SettingProvider.IsTrueAsync(AccountSettingNames.EnableLocalLogin);
            IsSelfRegistrationEnabled = await SettingProvider.IsTrueAsync(AccountSettingNames.IsSelfRegistrationEnabled);

            UseCaptcha = await UseCaptchaOnLoginAsync();

            if (IsExternalLoginOnly)
            {
                //return await ExternalLogin(vm.ExternalLoginScheme, returnUrl);
                throw new NotImplementedException();
            }

            IsLinkLogin = await VerifyLinkTokenAsync();
        }

        [UnitOfWork] //TODO: Will be removed when we implement action filter
        public virtual async Task<IActionResult> OnPostAsync(string action)
        {
            UseCaptcha = await UseCaptchaOnLoginAsync();
            if (UseCaptcha)
            {
                try
                {
                    var reCaptchaVersion = await SettingProvider.GetAsync<int>(AccountSettingNames.Captcha.Version);
                    await ReCaptchaOptions.SetAsync(reCaptchaVersion == 3 ? reCAPTCHAConsts.V3 :reCAPTCHAConsts.V2);

                    var recaptchaValidator = await RecaptchaValidatorFactory.CreateAsync();
                    await recaptchaValidator.ValidateAsync(HttpContext.Request.Form[RecaptchaValidatorBase.RecaptchaResponseKey]);
                }
                catch (UserFriendlyException e)
                {
                    Alerts.Danger(e.Message);
                    return Page();
                }
            }

            ValidateModel();

            await IdentityOptions.SetAsync();

            ExternalProviders = await GetExternalProviders();

            EnableLocalLogin = await SettingProvider.IsTrueAsync(AccountSettingNames.EnableLocalLogin);
            IsSelfRegistrationEnabled = await SettingProvider.IsTrueAsync(AccountSettingNames.IsSelfRegistrationEnabled);

            await ReplaceEmailToUsernameOfInputIfNeeds();

            IsLinkLogin = await VerifyLinkTokenAsync();

            var result = await SignInManager.PasswordSignInAsync(
                LoginInput.UserNameOrEmailAddress,
                LoginInput.Password,
                LoginInput.RememberMe,
                true
            );

            await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
            {
                Identity = IdentitySecurityLogIdentityConsts.Identity,
                Action = result.ToIdentitySecurityLogAction(),
                UserName = LoginInput.UserNameOrEmailAddress
            });

            if (result.RequiresTwoFactor)
            {
                return RedirectToPage("./SendSecurityCode", new
                {
                    returnUrl = ReturnUrl,
                    returnUrlHash = ReturnUrlHash,
                    rememberMe = LoginInput.RememberMe,
                    linkUserId = LinkUserId,
                    linkTenantId = LinkTenantId,
                    linkToken = LinkToken
                });
            }

            if (result.IsLockedOut)
            {
                Alerts.Warning(L["UserLockedOutMessage"]);
                return Page();
            }

            if (result.IsNotAllowed)
            {
                Alerts.Warning(L["LoginIsNotAllowed"]);
                return Page();
            }

            if (!result.Succeeded)
            {
                Alerts.Danger(L["InvalidUserNameOrPassword"]);
                return Page();
            }

            //TODO: Find a way of getting user's id from the logged in user and do not query it again like that!
            var user = await UserManager.FindByNameAsync(LoginInput.UserNameOrEmailAddress) ??
                       await UserManager.FindByEmailAsync(LoginInput.UserNameOrEmailAddress);

            Debug.Assert(user != null, nameof(user) + " != null");

            if (IsLinkLogin)
            {
                using (CurrentPrincipalAccessor.Change(await SignInManager.CreateUserPrincipalAsync(user)))
                {
                    await IdentityLinkUserAppService.LinkAsync(new LinkUserInput
                    {
                        UserId = LinkUserId.Value,
                        TenantId = LinkTenantId,
                        Token = LinkToken
                    });
                }
            }

            return RedirectSafely(ReturnUrl, ReturnUrlHash);
        }

        [UnitOfWork]
        public virtual async Task<IActionResult> OnGetCreateLinkUser()
        {
            IsLinkLogin = await VerifyLinkTokenAsync();
            if (IsLinkLogin)
            {
                await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
                {
                    Identity = IdentitySecurityLogIdentityConsts.Identity,
                    Action = IdentitySecurityLogActionConsts.Logout
                });

                await SignInManager.SignOutAsync();
            }

            return RedirectToPage("./Login", new
            {
                ReturnUrl = ReturnUrl,
                ReturnUrlHash = ReturnUrlHash,
                LinkUserId = LinkUserId,
                LinkTenantId = LinkTenantId,
                LinkToken = LinkToken
            });
        }

        protected virtual async Task<bool> VerifyLinkTokenAsync()
        {
            if (LinkToken.IsNullOrWhiteSpace() || LinkUserId == null)
            {
                return false;
            }

            return await IdentityLinkUserAppService.VerifyLinkTokenAsync(new VerifyLinkTokenInput
            {
                UserId = LinkUserId.Value,
                TenantId = LinkTenantId,
                Token = LinkToken
            });
        }

        protected virtual async Task<List<ExternalProviderModel>> GetExternalProviders()
        {
            var schemes = await SchemeProvider.GetAllSchemesAsync();
            var externalProviders = await AccountExternalProviderAppService.GetAllAsync();

            var externalProviderModels = new List<ExternalProviderModel>();
            foreach (var scheme in schemes)
            {
                if (IsRemoteAuthenticationHandler(scheme, externalProviders) || scheme.Name.Equals(AccountOptions.WindowsAuthenticationSchemeName, StringComparison.OrdinalIgnoreCase))
                {
                    externalProviderModels.Add(new ExternalProviderModel
                    {
                        DisplayName = scheme.DisplayName,
                        AuthenticationScheme = scheme.Name,
                        Icon = AccountOptions.ExternalProviderIconMap.GetOrDefault(scheme.Name)
                    });
                }
            }

            return externalProviderModels;
        }

        protected virtual bool IsRemoteAuthenticationHandler(AuthenticationScheme scheme, ExternalProviderDto externalProviders)
        {
            if (ReflectionHelper.IsAssignableToGenericType(scheme.HandlerType, typeof(RemoteAuthenticationHandler<>)))
            {
                var provider = externalProviders.Providers.FirstOrDefault(x => x.Name == scheme.Name);
                return provider == null || provider.Enabled;
            }

            return false;
        }

        protected virtual async Task ReplaceEmailToUsernameOfInputIfNeeds()
        {
            if (!ValidationHelper.IsValidEmailAddress(LoginInput.UserNameOrEmailAddress))
            {
                return;
            }

            var userByUsername = await UserManager.FindByNameAsync(LoginInput.UserNameOrEmailAddress);
            if (userByUsername != null)
            {
                return;
            }

            var userByEmail = await UserManager.FindByEmailAsync(LoginInput.UserNameOrEmailAddress);
            if (userByEmail == null)
            {
                return;
            }

            LoginInput.UserNameOrEmailAddress = userByEmail.UserName;
        }

        [UnitOfWork]
        public virtual async Task<IActionResult> OnPostExternalLogin(string provider)
        {
            var redirectUrl = Url.Page("./Login", pageHandler: "ExternalLoginCallback", values: new { ReturnUrl, ReturnUrlHash });
            var properties = SignInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            properties.Items["scheme"] = provider;

            return await Task.FromResult(Challenge(properties, provider));
        }

        [UnitOfWork]
        public virtual async Task<IActionResult> OnGetExternalLoginCallbackAsync(string returnUrl = "", string returnUrlHash = "", string remoteError = null)
        {
            //TODO: Did not implemented Identity Server 4 sample for this method (see ExternalLoginCallback in Quickstart of IDS4 sample)
            /* Also did not implement these:
             * - Logout(string logoutId)
             */

            if (remoteError != null)
            {
                Logger.LogWarning($"External login callback error: {remoteError}");
                return RedirectToPage("./Login");
            }

            await IdentityOptions.SetAsync();

            var loginInfo = await SignInManager.GetExternalLoginInfoAsync();
            if (loginInfo == null)
            {
                Logger.LogWarning("External login info is not available");
                return RedirectToPage("./Login");
            }

            IsLinkLogin = await VerifyLinkTokenAsync();

            var result = await SignInManager.ExternalLoginSignInAsync(
                loginInfo.LoginProvider,
                loginInfo.ProviderKey,
                isPersistent: true,
                bypassTwoFactor: true
            );

            if (!result.Succeeded)
            {
                await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
                {
                    Identity = IdentitySecurityLogIdentityConsts.IdentityExternal,
                    Action = "Login" + result
                });
            }

            if (result.IsLockedOut)
            {
                throw new UserFriendlyException("Cannot proceed because user is locked out!");
            }

            if (result.Succeeded)
            {
                if (IsLinkLogin)
                {
                    var user = await UserManager.FindByLoginAsync(loginInfo.LoginProvider, loginInfo.ProviderKey);
                    using (CurrentPrincipalAccessor.Change(await SignInManager.CreateUserPrincipalAsync(user)))
                    {
                        await IdentityLinkUserAppService.LinkAsync(new LinkUserInput
                        {
                            UserId = LinkUserId.Value,
                            TenantId = LinkTenantId,
                            Token = LinkToken
                        });
                    }
                }

                return RedirectSafely(returnUrl, returnUrlHash);
            }

            //TODO: Handle other cases for result!

            // Get the information about the user from the external login provider
            var externalLoginInfo = await SignInManager.GetExternalLoginInfoAsync();
            if (externalLoginInfo == null)
            {
                throw new ApplicationException("Error loading external login information during confirmation.");
            }

            if (!IsEmailRetrievedFromExternalLogin(externalLoginInfo))
            {
                return RedirectToPage("./Register", new
                {
                    IsExternalLogin = true,
                    ExternalLoginAuthSchema = externalLoginInfo.LoginProvider,
                    ReturnUrl = returnUrl
                });
            }

            var externalUser = await CreateExternalUserAsync(externalLoginInfo);

            await SignInManager.SignInAsync(externalUser, false);

            if (IsLinkLogin)
            {
                using (CurrentPrincipalAccessor.Change(await SignInManager.CreateUserPrincipalAsync(externalUser)))
                {
                    await IdentityLinkUserAppService.LinkAsync(new LinkUserInput
                    {
                        UserId = LinkUserId.Value,
                        TenantId = LinkTenantId,
                        Token = LinkToken
                    });
                }
            }

            await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
            {
                Identity = IdentitySecurityLogIdentityConsts.IdentityExternal,
                Action = result.ToIdentitySecurityLogAction(),
                UserName = externalUser.Name
            });

            return RedirectSafely(returnUrl, returnUrlHash);
        }

        public virtual async Task<IActionResult> OnPostLinkLoginAsync()
        {
            if (LinkUserId == CurrentUser.Id && LinkTenantId == CurrentTenant.Id)
            {
                return RedirectSafely(ReturnUrl, ReturnUrlHash);
            }

            if (LinkUserId != null)
            {
                if (await IdentityLinkUserAppService.IsLinkedAsync(new IsLinkedInput
                {
                    UserId = LinkUserId.Value,
                    TenantId = LinkTenantId
                }))
                {
                    var isPersistent = (await HttpContext.AuthenticateAsync(IdentityConstants.ApplicationScheme))?.Properties?.IsPersistent ?? false;
                    await SignInManager.SignOutAsync();
                    using (CurrentTenant.Change(LinkTenantId))
                    {
                        var targetUser = await UserManager.GetByIdAsync(LinkUserId.Value);
                        await SignInManager.SignInAsync(targetUser, isPersistent);
                    }
                    return RedirectSafely(ReturnUrl, ReturnUrlHash);
                }
            }

            throw new UserFriendlyException(L["TheTargetUserIsNotLinkedToYou"]);
        }

        private static bool IsEmailRetrievedFromExternalLogin(ExternalLoginInfo externalLoginInfo)
        {
            return externalLoginInfo.Principal.FindFirstValue(AbpClaimTypes.Email) != null;
        }

        protected virtual async Task<IdentityUser> CreateExternalUserAsync(ExternalLoginInfo info)
        {
            await IdentityOptions.SetAsync();

            var emailAddress = info.Principal.FindFirstValue(AbpClaimTypes.Email);

            var user = new IdentityUser(GuidGenerator.Create(), emailAddress, emailAddress, CurrentTenant.Id);

            (await UserManager.CreateAsync(user)).CheckErrors();
            (await UserManager.SetEmailAsync(user, emailAddress)).CheckErrors();
            (await UserManager.AddLoginAsync(user, info)).CheckErrors();
            (await UserManager.AddDefaultRolesAsync(user)).CheckErrors();

            return user;
        }

        protected virtual async Task<bool> UseCaptchaOnLoginAsync()
        {
            return await SettingProvider.IsTrueAsync(AccountSettingNames.Captcha.UseCaptchaOnLogin);
        }

        public class LoginInputModel
        {
            [Required]
            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxEmailLength))]
            public string UserNameOrEmailAddress { get; set; }

            [Required]
            [DynamicStringLength(typeof(IdentityUserConsts), nameof(IdentityUserConsts.MaxPasswordLength))]
            [DataType(DataType.Password)]
            [DisableAuditing]
            public string Password { get; set; }

            public bool RememberMe { get; set; }
        }

        public class ExternalProviderModel
        {
            public string DisplayName { get; set; }
            public string AuthenticationScheme { get; set; }

            public string Icon { get; set; }
        }
    }
}
