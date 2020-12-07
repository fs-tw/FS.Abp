using System.Threading.Tasks;
using Blazorise;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Localization;
using Volo.Abp.AspNetCore.Components.Messages;
using Volo.Abp.Identity.Localization;

namespace Volo.Abp.Identity.Pro.Blazor.Pages.Identity.IdentitySettingGroup
{
    public partial class IdentitySettingManagementComponent
    {
        [Inject]
        protected IIdentitySettingsAppService IdentitySettingsAppService { get; set; }
        
        [Inject]
        protected IUiMessageService UiMessageService { get; set; }
        
        [Inject]
        protected IStringLocalizer<IdentityResource> L { get; set; }
        
        protected IdentitySettingsDto IdentitySettings;

        protected Validations IdentitySettingValidation;
        
        protected override async Task OnInitializedAsync()
        {
            IdentitySettings = await IdentitySettingsAppService.GetAsync();
        }

        protected virtual async Task UpdateSettingsAsync()
        {
            await IdentitySettingsAppService.UpdateAsync(IdentitySettings);

            await UiMessageService.Success(L["SavedSuccessfully"]);
        }
    }
}