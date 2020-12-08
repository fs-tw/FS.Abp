using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.IdentityServer.ApiScope.Dtos;

namespace Volo.Abp.IdentityServer.ApiScope
{
    public interface IApiScopeAppService : IApplicationService
    {
        Task<PagedResultDto<ApiScopeWithDetailsDto>> GetListAsync(GetApiScopeListInput input);

        Task<List<ApiScopeWithDetailsDto>> GetAllListAsync();

        Task<ApiScopeWithDetailsDto> GetAsync(Guid id);

        Task<ApiScopeWithDetailsDto> CreateAsync(CreateApiScopeDto input);

        Task<ApiScopeWithDetailsDto> UpdateAsync(Guid id, UpdateApiScopeDto input);

        Task DeleteAsync(Guid id);
    }
}
