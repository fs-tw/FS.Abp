using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Identity
{
    [RemoteService(Name = IdentityProRemoteServiceConsts.RemoteServiceName)]
    [Area("identity")]
    [ControllerName("SecurityLog")]
    [Route("api/identity/security-logs")]
    public class IdentitySecurityLogController : AbpController, IIdentitySecurityLogAppService
    {
        protected IIdentitySecurityLogAppService IdentitySecurityLogAppService { get; }

        public IdentitySecurityLogController(IIdentitySecurityLogAppService identitySecurityLogAppService)
        {
            IdentitySecurityLogAppService = identitySecurityLogAppService;
        }

        [HttpGet]
        public Task<PagedResultDto<IdentitySecurityLogDto>> GetListAsync([FromQuery]GetIdentitySecurityLogListInput input)
        {
            return IdentitySecurityLogAppService.GetListAsync(input);
        }

        [HttpGet]
        [Route("{id}")]
        public Task<IdentitySecurityLogDto> GetAsync(Guid id)
        {
            return IdentitySecurityLogAppService.GetAsync(id);
        }

        [HttpGet]
        [Route("my")]
        public Task<PagedResultDto<IdentitySecurityLogDto>> GetMyListAsync([FromQuery]GetIdentitySecurityLogListInput input)
        {
            return IdentitySecurityLogAppService.GetMyListAsync(input);
        }

        [HttpGet]
        [Route("my/{id}")]
        public Task<IdentitySecurityLogDto> GetMyAsync(Guid id)
        {
            return IdentitySecurityLogAppService.GetMyAsync(id);
        }
    }
}
