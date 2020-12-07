using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;
using Volo.Abp.IdentityServer.IdentityResource;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;

namespace Volo.Abp.IdentityServer
{
    [RemoteService(Name = IdentityServerRemoteServiceConsts.RemoteServiceName)]
    [Area("identityServer")]
    [Controller]
    [ControllerName("IdentityResources")]
    [Route("api/identity-server/identity-resources")]
    [DisableAuditing]
    public class IdentityResourcesController : AbpController, IIdentityResourceAppService
    {
        protected IIdentityResourceAppService IdentityResourceAppService { get; }

        public IdentityResourcesController(IIdentityResourceAppService identityResourceAppService)
        {
            IdentityResourceAppService = identityResourceAppService;
        }

        [HttpGet]
        [Route("")]
        public Task<PagedResultDto<IdentityResourceWithDetailsDto>> GetListAsync(GetIdentityResourceListInput input)
        {
            return IdentityResourceAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("all")]
        public virtual Task<List<IdentityResourceWithDetailsDto>> GetAllListAsync()
        {
            return IdentityResourceAppService.GetAllListAsync(); //TODO: Instead of double GetListAsync/GetAllListAsync, we can make this page non-paged!
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<IdentityResourceWithDetailsDto> GetAsync(Guid id)
        {
            return IdentityResourceAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<IdentityResourceWithDetailsDto> CreateAsync(CreateIdentityResourceDto input)
        {
            return IdentityResourceAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<IdentityResourceWithDetailsDto> UpdateAsync(Guid id, UpdateIdentityResourceDto input)
        {
            return IdentityResourceAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        public virtual Task DeleteAsync(Guid id)
        {
            return IdentityResourceAppService.DeleteAsync(id);
        }

        [HttpPost]
        [Route("create-standard-resources")]
        public virtual Task CreateStandardResourcesAsync()
        {
            return IdentityResourceAppService.CreateStandardResourcesAsync();
        }
    }
}
