using IdentityModel;
using IdentityServer4.Events;
using IdentityServer4.Services;
using IdentityServer4.Validation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;
using IdentityUser = Volo.Abp.Identity.IdentityUser;

namespace FS.Abp.Authentication.External
{
    public class ExternalLoginGrant : IExtensionGrantValidator
    {
        public string GrantType => "ExternalLogin";
        private readonly IServiceProvider serviceProvider;
        private readonly ExternalAuthProviderOptions options;
        private readonly IEventService eventService;
        private readonly IIdentityRoleRepository identityRoleRepository;
        private readonly IGuidGenerator guidGenerator;
        private readonly ICurrentTenant currentTenant;
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public ExternalLoginGrant(
            IServiceProvider serviceProvider,
            IOptions<ExternalAuthProviderOptions> options,
            IEventService eventService,
            IIdentityRoleRepository identityRoleRepository,
            IGuidGenerator guidGenerator,
            ICurrentTenant currentTenant,
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager
            )
        {
            this.serviceProvider = serviceProvider;
            this.options = options.Value;

            this.eventService = eventService;
            this.identityRoleRepository = identityRoleRepository;
            this.guidGenerator = guidGenerator;
            this.currentTenant = currentTenant;
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [UnitOfWork]
        public async Task ValidateAsync(ExtensionGrantValidationContext context)
        {
            var provider_key = context.Request.Raw.Get("provider_key");


            var externalAuthProvider = this.serviceProvider.GetService(
                 options.ExternalAuthProviders
                     .Single(x => x.Key == provider_key).Value.ExternalAuthProviderType
             ) as IExternalAuthProvider;

            var userInfo = await externalAuthProvider.GetUserInfoAsync(context.Request.Raw);

            if (userInfo == null)
            {
                context.Result = new GrantValidationResult(OidcConstants.TokenErrors.InvalidGrant, null);
                return;
            }

            var user = await FindOrCreateIdentityUser(userInfo);
            if (user == null) return;
            await signInManager.SignInAsync(user, true);
            await eventService.RaiseAsync(new UserLoginSuccessEvent(user.UserName, user.Id.ToString(), user.Name, interactive: false));
            context.Result = getGrantValidationResult(user);
        }
        private GrantValidationResult getGrantValidationResult(IdentityUser user)
        {
            var sub = user.Id.ToString();
            var additionalClaims = new List<Claim>();
            if (user.TenantId.HasValue)
            {
                additionalClaims.Add(new Claim(AbpClaimTypes.TenantId, user.TenantId?.ToString()));
            }
            return new GrantValidationResult(
                sub,
                GrantType,
                additionalClaims.ToArray()
            );
        }

        public async Task<IdentityUser> FindOrCreateIdentityUser(ExternalAuthUserInfo userInfo)
        {
            var tenant = currentTenant.Id;


            IdentityUser result = await userManager.FindByNameAsync(userInfo.UserName);
            if (result == null)
            {
                result = new IdentityUser(guidGenerator.Create(),
                   userInfo.UserName, userInfo.EmailAddress, currentTenant.Id);
                result.Name = userInfo.Name;
                result.IsExternal = true;
                (await userManager.CreateAsync(result)).CheckErrors();
                var defaultRoles = await this.identityRoleRepository.GetDefaultOnesAsync();                
                await userManager.AddToRolesAsync(result, defaultRoles.Select(x => x.Name));
            }
            return result;
        }
    }
}
