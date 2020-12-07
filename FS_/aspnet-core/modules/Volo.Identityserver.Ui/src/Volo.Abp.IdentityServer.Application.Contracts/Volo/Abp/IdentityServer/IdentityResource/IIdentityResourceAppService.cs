using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;

namespace Volo.Abp.IdentityServer.IdentityResource
{
    public interface IIdentityResourceAppService : IApplicationService
    {
        Task<PagedResultDto<IdentityResourceWithDetailsDto>> GetListAsync(GetIdentityResourceListInput input);

        Task<List<IdentityResourceWithDetailsDto>> GetAllListAsync();

        Task<IdentityResourceWithDetailsDto> GetAsync(Guid id);

        Task<IdentityResourceWithDetailsDto> CreateAsync(CreateIdentityResourceDto input);

        Task<IdentityResourceWithDetailsDto> UpdateAsync(Guid id, UpdateIdentityResourceDto input);

        Task DeleteAsync(Guid id);

        Task CreateStandardResourcesAsync();
    }
}
