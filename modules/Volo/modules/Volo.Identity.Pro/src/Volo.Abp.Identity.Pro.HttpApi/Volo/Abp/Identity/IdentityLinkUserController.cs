using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Application.Dtos;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Identity
{
    [RemoteService(Name = IdentityProRemoteServiceConsts.RemoteServiceName)]
    [Area("identity")]
    [ControllerName("User")]
    [Route("api/identity/link-user")]
    public class IdentityLinkUserController : AbpController, IIdentityLinkUserAppService
    {
        protected IIdentityLinkUserAppService IdentityLinkUserAppService { get; }

        public IdentityLinkUserController(IIdentityLinkUserAppService identityLinkUserAppService)
        {
            IdentityLinkUserAppService = identityLinkUserAppService;
        }

        [HttpPost]
        [Route("link")]
        public Task LinkAsync(LinkUserInput input)
        {
            return IdentityLinkUserAppService.LinkAsync(input);
        }

        [HttpPost]
        [Route("unlink")]
        public Task UnlinkAsync(UnLinkUserInput input)
        {
            return IdentityLinkUserAppService.UnlinkAsync(input);
        }

        [HttpPost]
        [Route("is-linked")]
        public Task<bool> IsLinkedAsync(IsLinkedInput input)
        {
            return IdentityLinkUserAppService.IsLinkedAsync(input);
        }

        [HttpPost]
        [Route("generate-link-token")]
        public Task<string> GenerateLinkTokenAsync()
        {
            return IdentityLinkUserAppService.GenerateLinkTokenAsync();
        }

        [HttpPost]
        [Route("verify-link-token")]
        public Task<bool> VerifyLinkTokenAsync(VerifyLinkTokenInput token)
        {
            return IdentityLinkUserAppService.VerifyLinkTokenAsync(token);
        }

        [HttpGet]
        public Task<ListResultDto<LinkUserDto>> GetAllListAsync()
        {
            return IdentityLinkUserAppService.GetAllListAsync();
        }
    }
}
