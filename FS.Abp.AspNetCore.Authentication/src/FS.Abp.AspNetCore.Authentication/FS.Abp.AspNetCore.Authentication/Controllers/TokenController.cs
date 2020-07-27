//using FS.WebSiteNg.Token.Models;
//using IdentityServer4.Validation;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Tokens.Jwt;
//using System.Linq;
//using System.Security.Claims;
//using System.Text;
//using System.Threading.Tasks;
//using Volo.Abp.AspNetCore.Mvc;
//using Volo.Abp.Identity;
//using Volo.Abp.Security.Claims;

//namespace FS.Abp.AspNetCore.Authentication.Controllers
//{
//    [Route("/api/token")]
//    public class TokenController: AbpController
//    {
//        protected SignInManager<Volo.Abp.Identity.IdentityUser> SignInManager { get; }
//        protected IdentityUserManager UserManager { get; }
//        public TokenController(
//            IdentityUserManager userManager,
//            SignInManager<Volo.Abp.Identity.IdentityUser> signInManager
//            )
//        {
//            SignInManager = signInManager;
//            UserManager = userManager;
//        }

//        [Route("authenticate")]
//        [HttpPost]
//        public virtual async Task<AuthenticateOutput> PostAuthenticate(AuthenticateInput login)
//        {

//            var identityUser = await UserManager.FindByNameAsync(login.UserNameOrEmailAddress);

//            var roles = await UserManager.GetRolesAsync(identityUser);

//            if (identityUser == null)
//            {
//                throw new Exception("Login Error");
//            }
//            var result = await SignInManager.PasswordSignInAsync(
//                login.UserNameOrEmailAddress,
//                login.Password,
//                true,
//                true
//            );
//            if (result.IsLockedOut)
//            {
//                return new AuthenticateOutput(LoginResultType.LockedOut);
//            }

//            if (result.RequiresTwoFactor)
//            {
//                return new AuthenticateOutput(LoginResultType.RequiresTwoFactor);
//            }

//            if (result.IsNotAllowed)
//            {
//                return new AuthenticateOutput(LoginResultType.NotAllowed);
//            }

//            if (!result.Succeeded)
//            {
//                return new AuthenticateOutput(LoginResultType.InvalidUserNameOrPassword);
//            }

//            // authentication successful so generate jwt token
//            var key = Encoding.ASCII.GetBytes("YINCHANG_FURTHER");
//            var accessToken = createAccessToken(identityUser,roles,key);
//            var identityUserDto = ObjectMapper.Map<Volo.Abp.Identity.IdentityUser, IdentityUserDto>(identityUser);
//            var authResult = new AuthenticateOutput();
//            //authResult.Result = LoginResultType.Success;
//            authResult.User = identityUserDto;
//            authResult.Token.AccessToken = accessToken;
//            authResult.Token.ExpireInSeconds = (int)new TimeSpan(7, 0, 0, 0).TotalSeconds;
//            return authResult;

//        }
//        private string createAccessToken(Volo.Abp.Identity.IdentityUser identityUser,IList<string> roles,byte[] key)
//        {
//            var tokenHandler = new JwtSecurityTokenHandler();
//            var tokenDescriptor = new SecurityTokenDescriptor
//            {
//                Subject = new ClaimsIdentity(new Claim[]
//                {
//                    new Claim(AbpClaimTypes.UserId, identityUser.Id.ToString()),
//                    new Claim(AbpClaimTypes.Email, identityUser.Email),

//                    new Claim(AbpClaimTypes.EmailVerified, identityUser.EmailConfirmed.ToString()),
//                    new Claim(AbpClaimTypes.PhoneNumberVerified, identityUser.PhoneNumberConfirmed.ToString()),
//                    new Claim(AbpClaimTypes.UserName, identityUser.UserName),
//                }),
//                Expires = DateTime.UtcNow.AddDays(7),
//                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
//            };
//            if (!string.IsNullOrEmpty(identityUser.Surname))
//                tokenDescriptor.Subject.AddClaim(new Claim(ClaimTypes.Surname, identityUser.Surname));
//            if (!string.IsNullOrEmpty(identityUser.PhoneNumber))
//                tokenDescriptor.Subject.AddClaim(new Claim(AbpClaimTypes.PhoneNumber, identityUser.PhoneNumber));
//            if (identityUser.TenantId.HasValue)
//                tokenDescriptor.Subject.AddClaim(new Claim(AbpClaimTypes.TenantId, identityUser.TenantId?.ToString()));
//            if (roles.Count > 0)
//                tokenDescriptor.Subject.AddClaims(roles.Select(x => new Claim(AbpClaimTypes.Role, x)));
//            var token = tokenHandler.CreateToken(tokenDescriptor);
//            return tokenHandler.WriteToken(token);
//        }

//        //private async Task GetLoginResultAsync(string usernameOrEmailAddress, string password)
//        //{
//        //    var user = await UserManager.FindByNameAsync(usernameOrEmailAddress);
//        //    var result = await SignInManager.PasswordSignInAsync("admin", "1q2w3E*", true, false);
//        //    if (result.Succeeded)
//        //    {
//        //        var sub = await UserManager.GetUserIdAsync(user);

//        //        var additionalClaims = new List<Claim>();

//        //        await AddCustomClaimsAsync(additionalClaims, user);

//        //        return;
//        //    }


//        //}
//        //protected virtual Task AddCustomClaimsAsync(List<Claim> customClaims, Volo.Abp.Identity.IdentityUser user)
//        //{
//        //    if (user.TenantId.HasValue)
//        //    {
//        //        customClaims.Add(new Claim(AbpClaimTypes.TenantId, user.TenantId?.ToString()));
//        //    }

//        //    return Task.CompletedTask;
//        //}
//    }
//}
