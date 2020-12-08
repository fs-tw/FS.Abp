using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Identity;

namespace Volo.Abp.Account.Public.Web.Pages.Account.Components.ProfileManagementGroup.TwoFactor
{
    public class AccountProfileTwoFactorManagementGroupViewComponent : AbpViewComponent
    {
        private readonly IProfileAppService _profileAppService;

        public AccountProfileTwoFactorManagementGroupViewComponent(IProfileAppService profileAppService)
        {
            _profileAppService = profileAppService;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = new ChangeTwoFactorModel
            {
                TwoFactorEnabled = await _profileAppService.GetTwoFactorEnabledAsync()
            };

            return View("~/Pages/Account/Components/ProfileManagementGroup/TwoFactor/Default.cshtml", model);
        }

        public class ChangeTwoFactorModel
        {
            public bool TwoFactorEnabled { get; set; }
        }
    }
}
