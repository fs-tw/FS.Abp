using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Identity
{
    [RemoteService(Name = IdentityProRemoteServiceConsts.RemoteServiceName)]
    [Area("identity")]
    [ControllerName("Settings")]
    [Route("api/identity/settings")]
    public class IdentitySettingsController : AbpController, IIdentitySettingsAppService
    {
        protected IIdentitySettingsAppService IdentitySettingsAppService { get; }

        public IdentitySettingsController(IIdentitySettingsAppService identitySettingsAppService)
        {
            IdentitySettingsAppService = identitySettingsAppService;
        }

        [HttpGet]
        public virtual Task<IdentitySettingsDto> GetAsync()
        {
            return IdentitySettingsAppService.GetAsync();
        }

        [HttpPut]
        public virtual Task UpdateAsync(IdentitySettingsDto input)
        {
            return IdentitySettingsAppService.UpdateAsync(input);
        }
    }
}
