using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.IdentityServer.ApiResource.Dtos;

namespace Volo.Abp.IdentityServer.ApiResource
{
    public interface IApiResourceAppService : IApplicationService
    {
        Task<PagedResultDto<ApiResourceWithDetailsDto>> GetListAsync(GetApiResourceListInput input);
        
        Task<List<ApiResourceWithDetailsDto>> GetAllListAsync();

        Task<ApiResourceWithDetailsDto> GetAsync(Guid id);

        Task<ApiResourceWithDetailsDto> CreateAsync(CreateApiResourceDto input);

        Task<ApiResourceWithDetailsDto> UpdateAsync(Guid id, UpdateApiResourceDto input);

        Task DeleteAsync(Guid id);
    }
}
