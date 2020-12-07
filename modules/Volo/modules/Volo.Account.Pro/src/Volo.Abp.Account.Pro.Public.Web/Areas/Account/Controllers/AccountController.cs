using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Volo.Abp.Account.Public.Web.Areas.Account.Controllers.Models;
using Volo.Abp.Identity;
using Volo.Abp.Identity.AspNetCore;
using Volo.Abp.Security.Claims;
using Volo.Abp.Validation;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;
using UserLoginInfo = Volo.Abp.Account.Public.Web.Areas.Account.Controllers.Models.UserLoginInfo;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace Volo.Abp.Account.Public.Web.Areas.Account.Controllers
{
    [RemoteService(Name = AccountProPublicRemoteServiceConsts.RemoteServiceName)]
    [Controller]
    [ControllerName("Login")]
    [Area("account")]
    [Route("api/account")]
    public class AccountController : AccountControllerBase
    {
        protected SignInManager<IdentityUser> SignInManager { get; }
        protected IdentityUserManager UserManager { get; }
        protected IdentitySecurityLogManager IdentitySecurityLogManager { get; }
        protected IIdentityLinkUserAppService IdentityLinkUserAppService { get; }
        protected ICurrentPrincipalAccessor CurrentPrincipalAccessor { get; }
        protected IOptions<IdentityOptions> IdentityOptions { get; }

        public AccountController(
            SignInManager<IdentityUser> signInManager,
            IdentityUserManager userManager,
            IdentitySecurityLogManager identitySecurityLogManager,
            IIdentityLinkUserAppService identityLinkUserAppService,
            ICurrentPrincipalAccessor currentPrincipalAccessor,
            IOptions<IdentityOptions> identityOptions)
        {
            SignInManager = signInManager;
            UserManager = userManager;
            IdentitySecurityLogManager = identitySecurityLogManager;
            IdentityLinkUserAppService = identityLinkUserAppService;
            CurrentPrincipalAccessor = currentPrincipalAccessor;
            IdentityOptions = identityOptions;
        }

        [HttpPost]
        [Route("login")]
        public virtual async Task<AbpLoginResult> Login(UserLoginInfo login)
        {
            ValidateLoginInfo(login);

            await ReplaceEmailToUsernameOfInputIfNeeds(login);

            var signInResult = await SignInManager.PasswordSignInAsync(
                login.UserNameOrEmailAddress,
                login.Password,
                login.RememberMe,
                true
            );

            await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
            {
                Identity = IdentitySecurityLogIdentityConsts.Identity,
                Action = signInResult.ToIdentitySecurityLogAction(),
                UserName = login.UserNameOrEmailAddress
            });

            return GetAbpLoginResult(signInResult);
        }

        [HttpPost]
        [Route("linkLogin")]
        public virtual async Task<AbpLoginResult> LinkLogin(LinkUserLoginInfo login)
        {
            if (login.LinkUserId == CurrentUser.Id && login.LinkTenantId == CurrentTenant.Id)
            {
                return new AbpLoginResult(LoginResultType.Success);
            }

            if (await IdentityLinkUserAppService.IsLinkedAsync(new IsLinkedInput
            {
                UserId = login.LinkUserId,
                TenantId = login.LinkTenantId
            }))
            {
                var isPersistent = (await HttpContext.AuthenticateAsync(IdentityConstants.ApplicationScheme))?.Properties?.IsPersistent ?? false;
                await SignInManager.SignOutAsync();
                using (CurrentTenant.Change(login.LinkTenantId))
                {
                    var targetUser = await UserManager.GetByIdAsync(login.LinkUserId);
                    await SignInManager.SignInAsync(targetUser, isPersistent);
                }

                return new AbpLoginResult(LoginResultType.Success);
            }

            return new AbpLoginResult(LoginResultType.NotLinked);
        }

        [HttpGet]
        [Route("logout")]
        public virtual async Task Logout()
        {
            if (CurrentUser.IsAuthenticated)
            {
                await IdentitySecurityLogManager.SaveAsync(new IdentitySecurityLogContext
                {
                    Identity = IdentitySecurityLogIdentityConsts.Identity,
                    Action = IdentitySecurityLogActionConsts.Logout
                });
            }

            await SignInManager.SignOutAsync();
        }

        [HttpPost]
        [Route("checkPassword")]
        public virtual async Task<AbpLoginResult> CheckPassword(UserLoginInfo login)
        {
            ValidateLoginInfo(login);

            await ReplaceEmailToUsernameOfInputIfNeeds(login);

            var identityUser = await UserManager.FindByNameAsync(login.UserNameOrEmailAddress);

            if (identityUser == null)
            {
                identityUser = await UserManager.FindByEmailAsync(login.UserNameOrEmailAddress);
            }

            await IdentityOptions.SetAsync();
            return GetAbpLoginResult(await SignInManager.CheckPasswordSignInAsync(identityUser, login.Password, true));
        }

        private static AbpLoginResult GetAbpLoginResult(SignInResult result)
        {
            if (result.IsLockedOut)
            {
                return new AbpLoginResult(LoginResultType.LockedOut);
            }

            if (result.RequiresTwoFactor)
            {
                return new AbpLoginResult(LoginResultType.RequiresTwoFactor);
            }

            if (result.IsNotAllowed)
            {
                return new AbpLoginResult(LoginResultType.NotAllowed);
            }

            if (!result.Succeeded)
            {
                return new AbpLoginResult(LoginResultType.InvalidUserNameOrPassword);
            }

            return new AbpLoginResult(LoginResultType.Success);
        }

        protected virtual void ValidateLoginInfo(UserLoginInfo login)
        {
            if (login == null)
            {
                throw new ArgumentException(nameof(login));
            }

            if (login.UserNameOrEmailAddress.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(login.UserNameOrEmailAddress));
            }

            if (login.Password.IsNullOrEmpty())
            {
                throw new ArgumentNullException(nameof(login.Password));
            }
        }

        protected virtual async Task ReplaceEmailToUsernameOfInputIfNeeds(UserLoginInfo login)
        {
            if (!ValidationHelper.IsValidEmailAddress(login.UserNameOrEmailAddress))
            {
                return;
            }

            var userByUsername = await UserManager.FindByNameAsync(login.UserNameOrEmailAddress);
            if (userByUsername != null)
            {
                return;
            }

            var userByEmail = await UserManager.FindByEmailAsync(login.UserNameOrEmailAddress);
            if (userByEmail == null)
            {
                return;
            }

            login.UserNameOrEmailAddress = userByEmail.UserName;
        }
    }
}
