using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Identity
{
    public interface IIdentityUserAppService : ICrudAppService<IdentityUserDto, Guid, GetIdentityUsersInput, IdentityUserCreateDto, IdentityUserUpdateDto>
    {
        Task<ListResultDto<IdentityRoleDto>> GetRolesAsync(Guid id);

        Task<ListResultDto<IdentityRoleDto>> GetAssignableRolesAsync();

        Task<ListResultDto<OrganizationUnitWithDetailsDto>> GetAvailableOrganizationUnitsAsync();

        Task<List<ClaimTypeDto>> GetAllClaimTypesAsync();

        Task<List<IdentityUserClaimDto>> GetClaimsAsync(Guid id);

        Task<List<OrganizationUnitDto>> GetOrganizationUnitsAsync(Guid id);

        Task UpdateRolesAsync(Guid id, IdentityUserUpdateRolesDto input);

        Task UpdateClaimsAsync(Guid id, List<IdentityUserClaimDto> input);

        Task UpdatePasswordAsync(Guid id, IdentityUserUpdatePasswordInput input);

        Task LockAsync(Guid id, int lockoutDuration);

        Task UnlockAsync(Guid id);

        Task<IdentityUserDto> FindByUsernameAsync(string username);

        Task<IdentityUserDto> FindByEmailAsync(string email);

        Task<bool> GetTwoFactorEnabledAsync(Guid id);

        Task SetTwoFactorEnabledAsync(Guid id, bool enabled);
    }
}
