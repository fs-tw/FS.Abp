using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.LeptonTheme.Management.Areas.LeptonThemeManagement.Models;

namespace Volo.Abp.LeptonTheme.Management.Pages.LeptonThemeManagement.Components.LeptonThemeSettingGroup
{
    public class LeptonThemeSettingGroupViewComponent: AbpViewComponent
    {
        private readonly ILeptonThemeSettingsAppService _leptonThemeSettingsAppService;

        public LeptonThemeSettingGroupViewComponent(ILeptonThemeSettingsAppService leptonThemeSettingsAppService)
        {
            ObjectMapperContext = typeof(LeptonThemeManagementWebModule);

            _leptonThemeSettingsAppService = leptonThemeSettingsAppService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = ObjectMapper.Map<LeptonThemeSettingsDto, LeptonThemeSettingsViewModel>(await _leptonThemeSettingsAppService.GetAsync());

            return View("~/Pages/LeptonThemeManagement/Components/LeptonThemeSettingGroup/Default.cshtml", model);
        }
    }
}
