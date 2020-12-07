using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Account.Admin.Web.Pages.Account.Components.AccountSettingGroup;
using Volo.Abp.Account.Localization;
using Volo.Abp.SettingManagement.Web.Pages.SettingManagement;

namespace Volo.Abp.Account.Admin.Web.Settings
{
    public class AccountSettingManagementPageContributor : ISettingPageContributor
    {
        public virtual async Task ConfigureAsync(SettingPageCreationContext context)
        {
            if (!await CheckPermissionsInternalAsync(context))
            {
                return;
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<AccountResource>>();
            context.Groups.Add(
                new SettingPageGroup(
                    "Volo.Abp.Account",
                    l["Menu:Account"],
                    typeof(AccountSettingGroupViewComponent)
                )
            );
        }

        public virtual async Task<bool> CheckPermissionsAsync(SettingPageCreationContext context)
        {
            return await CheckPermissionsInternalAsync(context);
        }

        protected virtual async Task<bool> CheckPermissionsInternalAsync(SettingPageCreationContext context)
        {
            var authorizationService = context.ServiceProvider.GetRequiredService<IAuthorizationService>();

            return await authorizationService.IsGrantedAsync(AccountPermissions.SettingManagement);
        }
    }
}
