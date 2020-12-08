using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;
using Volo.Abp.IdentityServer.ApiScope;
using Volo.Abp.IdentityServer.ApiScope.Dtos;

namespace Volo.Abp.IdentityServer
{
    [RemoteService(Name = IdentityServerRemoteServiceConsts.RemoteServiceName)]
    [Area("identityServer")]
    [Controller]
    [ControllerName("ApiScopes")]
    [Route("api/identity-server/apiScopes")]
    [DisableAuditing]
    public class ApiScopesController: AbpController, IApiScopeAppService
    {
        public IApiScopeAppService ApiScopeAppService { get; }

        public ApiScopesController(IApiScopeAppService apiScopeAppService)
        {
            ApiScopeAppService = apiScopeAppService;
        }

        [HttpGet]
        public Task<PagedResultDto<ApiScopeWithDetailsDto>> GetListAsync(GetApiScopeListInput input)
        {
            return ApiScopeAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("all")]
        public Task<List<ApiScopeWithDetailsDto>> GetAllListAsync()
        {
            return ApiScopeAppService.GetAllListAsync();
        }

        [HttpGet]
        [Route("{id}")]
        public Task<ApiScopeWithDetailsDto> GetAsync(Guid id)
        {
            return ApiScopeAppService.GetAsync(id);
        }

        [HttpPost]
        public Task<ApiScopeWithDetailsDto> CreateAsync(CreateApiScopeDto input)
        {
            return ApiScopeAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public Task<ApiScopeWithDetailsDto> UpdateAsync(Guid id, UpdateApiScopeDto input)
        {
            return ApiScopeAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        public Task DeleteAsync(Guid id)
        {
            return ApiScopeAppService.DeleteAsync(id);
        }
    }
}
