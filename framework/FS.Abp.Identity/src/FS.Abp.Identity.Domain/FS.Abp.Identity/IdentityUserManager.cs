using Microsoft.AspNetCore.Identity;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.Abp.Guids;
using Volo.Abp.Identity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;
using Volo.Abp.Users;

namespace FS.Abp.Identity
{
    public class IdentityUserLookupService : Volo.Abp.DependencyInjection.ITransientDependency
    {
        private readonly IGuidGenerator guidGenerator;
        private readonly Volo.Abp.Identity.IdentityUserManager userManager;

        public IdentityUserLookupService(
            Volo.Abp.Guids.IGuidGenerator guidGenerator,
            Volo.Abp.Identity.IdentityUserManager userManager)
        {
            this.guidGenerator=guidGenerator;
            this.userManager=userManager;
        }
        [Volo.Abp.Uow.UnitOfWork]
        public virtual async Task<IdentityUser> LookupUserAsync(string email, string roleName)
        {
            var user = await this.userManager.FindByEmailAsync(email);

            if (user == null)
            {
                user = new Volo.Abp.Identity.IdentityUser(guidGenerator.Create(), email, email);

                (await userManager.CreateAsync(user)).CheckErrors();

                await this.userManager.SetRolesAsync(user, new[] { roleName });
            }

            return user;
        }
    }

    public class IdentityUserManager : DomainService, IIdentityUserManager
    {

        private static string AuthenticationType => "Identity.Application";

        private readonly Volo.Abp.Identity.IdentityUserManager UserManager;
        private readonly ICurrentPrincipalAccessor CurrentPrincipalAccessor;
        private readonly IAbpClaimsPrincipalFactory AbpClaimsPrincipalFactory;
        private readonly AbpUserClaimsPrincipalFactory AbpUserClaimsPrincipalFactory;
        private readonly IdentityUserLookupService identityUserLookupService;

        public IdentityUserManager(
            Volo.Abp.Identity.IdentityUserManager UserManager,
            ICurrentPrincipalAccessor CurrentPrincipalAccessor,
            IAbpClaimsPrincipalFactory AbpClaimsPrincipalFactory,
            AbpUserClaimsPrincipalFactory AbpUserClaimsPrincipalFactory,
            IdentityUserLookupService identityUserLookupService
            )
        {
            this.UserManager = UserManager;
            this.CurrentPrincipalAccessor = CurrentPrincipalAccessor;
            this.AbpClaimsPrincipalFactory = AbpClaimsPrincipalFactory;
            this.AbpUserClaimsPrincipalFactory = AbpUserClaimsPrincipalFactory;
            this.identityUserLookupService=identityUserLookupService;
        }

        public virtual async Task ChangeUserClaimsAsync(string email, Func<Task> action, string roleName = "admin")
        {
            var user = await identityUserLookupService.LookupUserAsync(email, roleName);

            ClaimsPrincipal claimsPrincipal = await this.AbpUserClaimsPrincipalFactory.CreateAsync(user);

            using (this.CurrentPrincipalAccessor.Change(
                await this.AbpClaimsPrincipalFactory.CreateAsync(claimsPrincipal)))
            {
                await action.Invoke();
            }
        }

        public virtual async Task ChangeUserClaimsAsync(Func<Task> action, string roleName = "admin")
        {
            // 參考 https://github.com/abpframework/abp/blob/e3e1779de6df5d26f01cdc8e99ac9cbcb3d24d3c/framework/src/Volo.Abp.Security/Volo/Abp/Security/Claims/AbpClaimsPrincipalFactory.cs
            var claimsPrincipal = new ClaimsPrincipal(
                new ClaimsIdentity(
                    new Claim[]
                    {
                                new Claim(AbpClaimTypes.UserId, Guid.Empty.ToString()),
                                new Claim(AbpClaimTypes.UserName, "Empty"),
                                new Claim(AbpClaimTypes.Role, roleName)
                    },
                    AuthenticationType,
                    AbpClaimTypes.UserName,
                    AbpClaimTypes.Role
                ));

            claimsPrincipal=await this.AbpClaimsPrincipalFactory.CreateAsync(claimsPrincipal);

            using (this.CurrentPrincipalAccessor.Change(claimsPrincipal))
            {

                await action.Invoke();
            }
        }
    }
}
