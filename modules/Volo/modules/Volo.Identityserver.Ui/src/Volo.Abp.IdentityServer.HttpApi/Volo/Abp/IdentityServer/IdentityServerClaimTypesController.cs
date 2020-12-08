using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Auditing;
using Volo.Abp.IdentityServer.ClaimType;
using Volo.Abp.IdentityServer.ClaimType.Dtos;

namespace Volo.Abp.IdentityServer
{
    [RemoteService(Name = IdentityServerRemoteServiceConsts.RemoteServiceName)]
    [Area("identityServer")]
    [Controller]
    [ControllerName("ClaimTypes")]
    [Route("api/identity-server/claim-types")]
    [DisableAuditing]
    public class IdentityServerClaimTypesController : AbpController, IIdentityServerClaimTypeAppService
    {
        protected IIdentityServerClaimTypeAppService ClaimTypeAppService { get; }

        public IdentityServerClaimTypesController(IIdentityServerClaimTypeAppService claimTypeAppService)
        {
            ClaimTypeAppService = claimTypeAppService;
        }

        [HttpGet]
        public virtual Task<List<IdentityClaimTypeDto>> GetListAsync()
        {
            return ClaimTypeAppService.GetListAsync();
        }
    }
}
