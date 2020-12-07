using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;
using Volo.Abp.IdentityServer.ApiResource;
using Volo.Abp.IdentityServer.ApiResource.Dtos;

namespace Volo.Abp.IdentityServer
{
    [RemoteService(Name = IdentityServerRemoteServiceConsts.RemoteServiceName)]
    [Area("identityServer")]
    [Controller]
    [ControllerName("ApiResources")]
    [Route("api/identity-server/api-resources")]
    [DisableAuditing]
    public class ApiResourcesController : AbpController, IApiResourceAppService
    {
        protected IApiResourceAppService ApiResourceAppService { get; }

        public ApiResourcesController(IApiResourceAppService apiResourceAppService)
        {
            ApiResourceAppService = apiResourceAppService;
        }

        [HttpGet]
        [Route("")]
        public virtual Task<PagedResultDto<ApiResourceWithDetailsDto>> GetListAsync(GetApiResourceListInput input)
        {
            return ApiResourceAppService.GetListAsync(input);
        } 

        [HttpGet]
        [Route("all")]
        public virtual Task<List<ApiResourceWithDetailsDto>> GetAllListAsync()
        {
            return ApiResourceAppService.GetAllListAsync();
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<ApiResourceWithDetailsDto> GetAsync(Guid id)
        {
            return ApiResourceAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<ApiResourceWithDetailsDto> CreateAsync(CreateApiResourceDto input)
        {
            return ApiResourceAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<ApiResourceWithDetailsDto> UpdateAsync(Guid id, UpdateApiResourceDto input)
        {
            return ApiResourceAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        public virtual Task DeleteAsync(Guid id)
        {
            return ApiResourceAppService.DeleteAsync(id);
        }
    }
}
