using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.Account.Feature;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Features;
using Volo.Abp.Identity.Features;

namespace Volo.Abp.Account.Admin.Web.Pages.Account.Components.AccountSettingGroup
{
    public class AccountSettingGroupViewComponent : AbpViewComponent
    {
        public AccountSettingsViewModel SettingsViewModel { get; set; }

        protected IAccountSettingsAppService AccountSettingsAppService { get; }
        protected IFeatureChecker FeatureChecker { get; }

        public AccountSettingGroupViewComponent(IAccountSettingsAppService accountSettingsAppService, IFeatureChecker featureChecker)
        {
            AccountSettingsAppService = accountSettingsAppService;
            FeatureChecker = featureChecker;
        }

        public virtual async Task<IViewComponentResult> InvokeAsync()
        {
            SettingsViewModel = new AccountSettingsViewModel
            {
                AccountSettings = await AccountSettingsAppService.GetAsync(),
                AccountRecaptchaSettings = await AccountSettingsAppService.GetRecaptchaAsync(),
                AccountExternalProviderSettings = await AccountSettingsAppService.GetExternalProviderAsync()
            };

            if (await FeatureChecker.IsEnabledAsync(AccountFeature.EnableLdapLogin))
            {
                SettingsViewModel.AccountLdapSettings = await AccountSettingsAppService.GetLdapAsync();
            }

            if (await IdentityTwoFactorBehaviourFeatureHelper.Get(FeatureChecker) == IdentityTwoFactorBehaviour.Optional)
            {
                SettingsViewModel.AccountTwoFactorSettings = await AccountSettingsAppService.GetTwoFactorAsync();
            }

            return View("~/Pages/Account/Components/AccountSettingGroup/Default.cshtml", SettingsViewModel);
        }

        public class AccountSettingsViewModel
        {
            public AccountSettingsDto AccountSettings { get; set; }

            public AccountLdapSettingsDto AccountLdapSettings { get; set; }

            public AccountTwoFactorSettingsDto AccountTwoFactorSettings { get; set; }

            public AccountRecaptchaSettingsDto AccountRecaptchaSettings { get; set; }

            public AccountExternalProviderSettingsDto AccountExternalProviderSettings { get; set; }
        }
    }
}
