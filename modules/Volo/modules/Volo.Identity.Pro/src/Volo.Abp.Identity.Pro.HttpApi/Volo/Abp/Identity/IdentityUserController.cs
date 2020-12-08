using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Identity
{
    [RemoteService(Name = IdentityProRemoteServiceConsts.RemoteServiceName)]
    [Area("identity")]
    [ControllerName("User")]
    [Route("api/identity/users")]
    public class IdentityUserController : AbpController, IIdentityUserAppService
    {
        protected IIdentityUserAppService UserAppService { get; }

        public IdentityUserController(IIdentityUserAppService userAppService)
        {
            UserAppService = userAppService;
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<IdentityUserDto> GetAsync(Guid id)
        {
            return UserAppService.GetAsync(id);
        }

        [HttpGet]
        public virtual Task<PagedResultDto<IdentityUserDto>> GetListAsync(GetIdentityUsersInput input)
        {
            return UserAppService.GetListAsync(input);
        }

        [HttpPost]
        public virtual Task<IdentityUserDto> CreateAsync(IdentityUserCreateDto input)
        {
            return UserAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<IdentityUserDto> UpdateAsync(Guid id, IdentityUserUpdateDto input)
        {
            return UserAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return UserAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("{id}/roles")]
        public virtual Task<ListResultDto<IdentityRoleDto>> GetRolesAsync(Guid id)
        {
            return UserAppService.GetRolesAsync(id);
        }

        [HttpGet]
        [Route("assignable-roles")]
        public Task<ListResultDto<IdentityRoleDto>> GetAssignableRolesAsync()
        {
            return UserAppService.GetAssignableRolesAsync();
        }

        [HttpGet]
        [Route("available-organization-units")]
        public Task<ListResultDto<OrganizationUnitWithDetailsDto>> GetAvailableOrganizationUnitsAsync()
        {
            return UserAppService.GetAvailableOrganizationUnitsAsync();
        }

        [HttpGet]
        [Route("all-claim-types")]
        public virtual Task<List<ClaimTypeDto>> GetAllClaimTypesAsync()
        {
            return UserAppService.GetAllClaimTypesAsync();
        }

        [HttpGet]
        [Route("{id}/claims")]
        public virtual Task<List<IdentityUserClaimDto>> GetClaimsAsync(Guid id)
        {
            return UserAppService.GetClaimsAsync(id);
        }

        [HttpGet]
        [Route("{id}/organization-units")]
        public virtual Task<List<OrganizationUnitDto>> GetOrganizationUnitsAsync(Guid id)
        {
            return UserAppService.GetOrganizationUnitsAsync(id);
        }

        [HttpPut]
        [Route("{id}/roles")]
        public virtual Task UpdateRolesAsync(Guid id, IdentityUserUpdateRolesDto input)
        {
            return UserAppService.UpdateRolesAsync(id, input);
        }

        [HttpPut]
        [Route("{id}/claims")]
        public virtual Task UpdateClaimsAsync(Guid id, List<IdentityUserClaimDto> input)
        {
            return UserAppService.UpdateClaimsAsync(id, input);
        }

        [HttpPut]
        [Route("{id}/lock/{lockoutDuration}")]
        public Task LockAsync(Guid id, int lockoutDuration)
        {
            return UserAppService.LockAsync(id, lockoutDuration);
        }

        [HttpPut]
        [Route("{id}/unlock")]
        public virtual Task UnlockAsync(Guid id)
        {
            return UserAppService.UnlockAsync(id);
        }

        [HttpGet]
        [Route("by-username/{username}")]
        public virtual Task<IdentityUserDto> FindByUsernameAsync(string username)
        {
            return UserAppService.FindByUsernameAsync(username);
        }

        [HttpGet]
        [Route("by-email/{email}")]
        public virtual Task<IdentityUserDto> FindByEmailAsync(string email)
        {
            return UserAppService.FindByEmailAsync(email);
        }

        [HttpGet]
        [Route("{id}/two-factor-enabled")]
        public Task<bool> GetTwoFactorEnabledAsync(Guid id)
        {
            return UserAppService.GetTwoFactorEnabledAsync(id);
        }

        [HttpPut]
        [Route("{id}/two-factor/{enabled}")]
        public Task SetTwoFactorEnabledAsync(Guid id, bool enabled)
        {
            return UserAppService.SetTwoFactorEnabledAsync(id, enabled);
        }

        [HttpPut]
        [Route("{id}/change-password")]
        public virtual Task UpdatePasswordAsync(Guid id, IdentityUserUpdatePasswordInput input)
        {
            return UserAppService.UpdatePasswordAsync(id, input);
        }
    }
}
