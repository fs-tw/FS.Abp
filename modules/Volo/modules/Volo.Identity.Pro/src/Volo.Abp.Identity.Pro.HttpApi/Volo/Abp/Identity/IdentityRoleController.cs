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
    [ControllerName("Role")]
    [Route("api/identity/roles")]
    public class IdentityRoleController : AbpController, IIdentityRoleAppService
    {
        protected IIdentityRoleAppService RoleAppService { get; }

        public IdentityRoleController(IIdentityRoleAppService roleAppService)
        {
            RoleAppService = roleAppService;
        }

        [HttpGet]
        [Route("{id}")]
        public virtual Task<IdentityRoleDto> GetAsync(Guid id)
        {
            return RoleAppService.GetAsync(id);
        }

        [HttpPost]
        public virtual Task<IdentityRoleDto> CreateAsync(IdentityRoleCreateDto input)
        {
            return RoleAppService.CreateAsync(input);
        }

        [HttpPut]
        [Route("{id}")]
        public virtual Task<IdentityRoleDto> UpdateAsync(Guid id, IdentityRoleUpdateDto input)
        {
            return RoleAppService.UpdateAsync(id, input);
        }

        [HttpDelete]
        [Route("{id}")]
        public virtual Task DeleteAsync(Guid id)
        {
            return RoleAppService.DeleteAsync(id);
        }

        [HttpGet]
        [Route("all")]
        public virtual Task<ListResultDto<IdentityRoleDto>> GetAllListAsync()
        {
            return RoleAppService.GetAllListAsync();
        }

        [HttpGet]
        [Route("")]
        public virtual Task<PagedResultDto<IdentityRoleDto>> GetListAsync(GetIdentityRoleListInput input)
        {
            return RoleAppService.GetListAsync(input);
        }

        [HttpPut]
        [Route("{id}/claims")]
        public virtual Task UpdateClaimsAsync(Guid id, List<IdentityRoleClaimDto> input)
        {
            return RoleAppService.UpdateClaimsAsync(id, input);
        }

        [HttpGet]
        [Route("{id}/claims")]
        public virtual Task<List<IdentityRoleClaimDto>> GetClaimsAsync(Guid id)
        {
            return RoleAppService.GetClaimsAsync(id);
        }

        [HttpGet]
        [Route("all-claim-types")]
        public virtual Task<List<ClaimTypeDto>> GetAllClaimTypesAsync()
        {
            return RoleAppService.GetAllClaimTypesAsync();
        }
    }
}
