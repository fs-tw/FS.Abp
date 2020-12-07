using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Identity.Localization;
using Volo.Abp.Identity.Pro.Blazor.Pages.Identity.IdentitySettingGroup;
using Volo.Abp.SettingManagement.Blazor;

namespace Volo.Abp.Identity.Pro.Blazor.Settings
{
    public class IdentitySettingManagementComponentContributor : ISettingComponentContributor
    {
        public virtual async Task ConfigureAsync(SettingComponentCreationContext context)
        {
            if (!await CheckPermissionsInternalAsync(context))
            {
                return;
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<IdentityResource>>();
            context.Groups.Add(
                new SettingComponentGroup(
                    "Volo.Abp.Identity",
                    l["Menu:IdentityManagement"],
                    typeof(IdentitySettingManagementComponent)
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

            return await authorizationService.IsGrantedAsync(IdentityPermissions.SettingManagement);
        }
    }
}