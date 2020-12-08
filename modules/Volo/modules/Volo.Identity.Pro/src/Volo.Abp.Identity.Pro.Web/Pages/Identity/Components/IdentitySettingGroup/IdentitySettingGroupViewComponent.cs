using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Abp.Identity.Web.Pages.Identity.Components.IdentitySettingGroup
{
    public class IdentitySettingGroupViewComponent : AbpViewComponent
    {
        protected IIdentitySettingsAppService IdentitySettingsAppService { get; }

        public IdentitySettingGroupViewComponent(IIdentitySettingsAppService identitySettingsAppService)
        {
            ObjectMapperContext = typeof(AbpIdentityWebModule);

            IdentitySettingsAppService = identitySettingsAppService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = await IdentitySettingsAppService.GetAsync();

            return View("~/Pages/Identity/Components/IdentitySettingGroup/Default.cshtml", model);
        }
    }
}
