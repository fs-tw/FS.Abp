using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Volo.Abp.Application.Dtos;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Users;

namespace Volo.Abp.Identity
{
    [Authorize]
    public class IdentityLinkUserAppService : IdentityAppServiceBase, IIdentityLinkUserAppService
    {
        protected IdentityLinkUserManager IdentityLinkUserManager { get; }
        protected IIdentityLinkUserRepository IdentityLinkUserRepository { get; }
        protected IdentityUserManager UserManager { get; }
        protected ITenantStore TenantStore { get; }

        public IdentityLinkUserAppService(
            IdentityLinkUserManager identityLinkUserManager,
            IIdentityLinkUserRepository identityLinkUserRepository,
            IdentityUserManager userManager,
            ITenantStore tenantStore)
        {
            IdentityLinkUserManager = identityLinkUserManager;
            IdentityLinkUserRepository = identityLinkUserRepository;
            UserManager = userManager;
            TenantStore = tenantStore;
        }

        public async Task LinkAsync(LinkUserInput input)
        {
            if (await IdentityLinkUserManager.VerifyLinkTokenAsync(new IdentityLinkUserInfo(input.UserId, input.TenantId), input.Token))
            {
                await IdentityLinkUserManager.LinkAsync(new IdentityLinkUserInfo(CurrentUser.GetId(), CurrentTenant.Id),
                    new IdentityLinkUserInfo(input.UserId, input.TenantId));
            }
            else
            {
                throw new UserFriendlyException("InvalidLinkToken");
            }
        }

        public async Task UnlinkAsync(UnLinkUserInput input)
        {
            await IdentityLinkUserManager.UnlinkAsync(new IdentityLinkUserInfo(CurrentUser.GetId(), CurrentTenant.Id),
                new IdentityLinkUserInfo(input.UserId, input.TenantId));
        }

        public async Task<bool> IsLinkedAsync(IsLinkedInput input)
        {
            return await IdentityLinkUserManager.IsLinkedAsync(
                new IdentityLinkUserInfo(CurrentUser.GetId(), CurrentTenant.Id),
                new IdentityLinkUserInfo(input.UserId, input.TenantId));
        }

        public async Task<string> GenerateLinkTokenAsync()
        {
            return await IdentityLinkUserManager.GenerateLinkTokenAsync(
                new IdentityLinkUserInfo(CurrentUser.GetId(), CurrentTenant.Id));
        }

        [AllowAnonymous]
        public async Task<bool> VerifyLinkTokenAsync(VerifyLinkTokenInput input)
        {
            return await IdentityLinkUserManager.VerifyLinkTokenAsync(
                new IdentityLinkUserInfo(input.UserId, input.TenantId), input.Token);
        }

        public async Task<ListResultDto<LinkUserDto>> GetAllListAsync()
        {
            List<IdentityLinkUser> linkUsers;

            var currentUserId = CurrentUser.GetId();
            var currentTenantId = CurrentTenant.Id;
            using (CurrentTenant.Change(null))
            {
                linkUsers = await IdentityLinkUserRepository.GetListAsync(new IdentityLinkUserInfo(currentUserId, currentTenantId));
            }

            var userDto = new List<LinkUserDto>();
            foreach (var linkUser in linkUsers)
            {
                var myLinkUser = new LinkUserDto()
                {
                    TargetUserId = linkUser.TargetUserId,
                    TargetTenantId = linkUser.TargetTenantId
                };

                if (myLinkUser.TargetUserId == CurrentUser.GetId() && myLinkUser.TargetTenantId == currentTenantId)
                {
                    myLinkUser.TargetUserId = linkUser.SourceUserId;
                    myLinkUser.TargetTenantId = linkUser.SourceTenantId;
                }

                TenantConfiguration tenant = null;
                if (myLinkUser.TargetTenantId.HasValue)
                {
                    using (CurrentTenant.Change(null))
                    {
                        tenant = await TenantStore.FindAsync(myLinkUser.TargetTenantId.Value);
                    }
                }

                using (CurrentTenant.Change(myLinkUser.TargetTenantId))
                {
                    var user = await UserManager.FindByIdAsync(myLinkUser.TargetUserId.ToString());
                    if (user != null)
                    {
                        userDto.Add(new LinkUserDto
                        {
                            TargetUserId = user.Id,
                            TargetUserName = user.UserName,
                            TargetTenantId = tenant?.Id,
                            TargetTenantName = tenant?.Name
                        });
                    }
                    else
                    {
                        await IdentityLinkUserManager.UnlinkAsync(
                            new IdentityLinkUserInfo(currentUserId, currentTenantId),
                            new IdentityLinkUserInfo(myLinkUser.TargetUserId, myLinkUser.TargetTenantId));
                    }
                }
            }

            return new ListResultDto<LinkUserDto>(userDto);
        }
    }
}
