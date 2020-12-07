using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace Volo.Abp.Identity
{
    public interface IIdentityRoleAppService : ICrudAppService<
        IdentityRoleDto,
        Guid,
        GetIdentityRoleListInput,
        IdentityRoleCreateDto,
        IdentityRoleUpdateDto>
    {
        Task<ListResultDto<IdentityRoleDto>> GetAllListAsync();

        Task UpdateClaimsAsync(Guid id, List<IdentityRoleClaimDto> input);

        Task<List<ClaimTypeDto>> GetAllClaimTypesAsync();

        Task<List<IdentityRoleClaimDto>> GetClaimsAsync(Guid id);
    }
}
