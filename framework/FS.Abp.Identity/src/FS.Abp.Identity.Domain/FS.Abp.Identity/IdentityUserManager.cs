using Microsoft.AspNetCore.Identity;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Volo.Abp.Domain.Services;
using Volo.Abp.Identity;
using Volo.Abp.Security.Claims;
using Volo.Abp.Uow;

namespace FS.Abp.Identity
{
    public class IdentityUserManager : DomainService, IIdentityUserManager
    {
        private static string AuthenticationType => "Identity.Application";
        private static string DefaultRoleName => "guest";


        private readonly Volo.Abp.Identity.IdentityUserManager UserManager;
        private readonly ICurrentPrincipalAccessor CurrentPrincipalAccessor;
        private readonly IAbpClaimsPrincipalFactory AbpClaimsPrincipalFactory;
        private readonly AbpUserClaimsPrincipalFactory AbpUserClaimsPrincipalFactory;

        public IdentityUserManager(
            Volo.Abp.Identity.IdentityUserManager UserManager,
            ICurrentPrincipalAccessor CurrentPrincipalAccessor,
            IAbpClaimsPrincipalFactory AbpClaimsPrincipalFactory,
            AbpUserClaimsPrincipalFactory AbpUserClaimsPrincipalFactory
            )
        {
            this.UserManager = UserManager;
            this.CurrentPrincipalAccessor = CurrentPrincipalAccessor;
            this.AbpClaimsPrincipalFactory = AbpClaimsPrincipalFactory;
            this.AbpUserClaimsPrincipalFactory = AbpUserClaimsPrincipalFactory;
        }

        [Volo.Abp.Uow.UnitOfWork]
        protected virtual async Task<IdentityUser> LookupUserAsync(string email)
        {
            var user = await this.UserManager.FindByEmailAsync(email);

            if (user == null)
            {
                user = new Volo.Abp.Identity.IdentityUser(GuidGenerator.Create(), email, email);

                (await UserManager.CreateAsync(user)).CheckErrors();

                await this.UserManager.SetRolesAsync(user, new[] { DefaultRoleName });
            }

            return user;
        }

        public virtual async Task ChangeTenantClaimsAsync(Guid? tenantId, string email, Func<Task> action)
        {
            // find user by email
            // if user not register, then create user
            try
            {
                using (CurrentTenant.Change(tenantId))
                {
                    var user = await LookupUserAsync(email);

                    ClaimsPrincipal claimsPrincipal = await this.AbpUserClaimsPrincipalFactory.CreateAsync(user);

                    using (this.CurrentPrincipalAccessor.Change(
                        await this.AbpClaimsPrincipalFactory.CreateAsync(claimsPrincipal)))
                    {

                        await action.Invoke();
                    }

                }
            }
            catch (Exception ex)
            {
            }
        }

        public virtual async Task ChangeTenantClaimsAsync(Guid? tenantId, Func<Task> action)
        {
            try
            {
                using (CurrentTenant.Change(tenantId))
                {
                    // 參考 https://github.com/abpframework/abp/blob/e3e1779de6df5d26f01cdc8e99ac9cbcb3d24d3c/framework/src/Volo.Abp.Security/Volo/Abp/Security/Claims/AbpClaimsPrincipalFactory.cs
                    var claimsPrincipal = new ClaimsPrincipal(
                        new ClaimsIdentity(
                            new Claim[]
                            {
                                new Claim(AbpClaimTypes.UserId, Guid.Empty.ToString()),
                                new Claim(AbpClaimTypes.UserName, "Empty"),
                                new Claim(AbpClaimTypes.Role, DefaultRoleName)
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
            catch (Exception ex)
            {
            }
        }
    }
}
