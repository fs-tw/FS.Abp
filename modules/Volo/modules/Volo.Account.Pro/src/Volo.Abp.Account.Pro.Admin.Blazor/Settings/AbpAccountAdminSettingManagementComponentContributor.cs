using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Account.Localization;
using Volo.Abp.Account.Pro.Admin.Blazor.Pages.AccountAdminSettingGroup;
using Volo.Abp.SettingManagement.Blazor;

namespace Volo.Abp.Account.Pro.Admin.Blazor.Settings
{
    public class AbpAccountAdminSettingManagementComponentContributor : ISettingComponentContributor
    {
        public async Task ConfigureAsync(SettingComponentCreationContext context)
        {
            if (!await CheckPermissionsInternalAsync(context))
            {
                return;
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<AccountResource>>();
            context.Groups.Add(
                new SettingComponentGroup(
                    "Volo.Abp.Account",
                    l["Menu:Account"],
                    typeof(AccountAdminSettingManagementComponent)
                )
            );
        }

        public virtual async Task<bool> CheckPermissionsAsync(SettingComponentCreationContext context)
        {
            return await CheckPermissionsInternalAsync(context);
        }

        protected virtual async Task<bool> CheckPermissionsInternalAsync(SettingComponentCreationContext context)
        {
            var authorizationService = context.ServiceProvider.GetRequiredService<IAuthorizationService>();

            return await authorizationService.IsGrantedAsync(AccountPermissions.SettingManagement);
        }
    }
}