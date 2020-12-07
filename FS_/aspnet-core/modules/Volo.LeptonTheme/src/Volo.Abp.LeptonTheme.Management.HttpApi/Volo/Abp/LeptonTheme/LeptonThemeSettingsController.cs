using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.LeptonTheme.Management;

namespace Volo.Abp.LeptonTheme
{
    [RemoteService(Name = LeptonThemeManagementRemoteServiceConsts.RemoteServiceName)]
    [Area("leptonThemeManagement")]
    [Route("api/lepton-theme-management/settings")]
    public class LeptonThemeSettingsController : AbpController, ILeptonThemeSettingsAppService
    {
        private readonly ILeptonThemeSettingsAppService _leptonThemeSettingsAppService;

        public LeptonThemeSettingsController(ILeptonThemeSettingsAppService leptonThemeSettingsAppService)
        {
            _leptonThemeSettingsAppService = leptonThemeSettingsAppService;
        }

        [HttpGet]
        public Task<LeptonThemeSettingsDto> GetAsync()
        {
            return _leptonThemeSettingsAppService.GetAsync();
        }

        [HttpPut]
        public Task UpdateAsync(UpdateLeptonThemeSettingsDto input)
        {
            return _leptonThemeSettingsAppService.UpdateAsync(input);
        }
    }
}
