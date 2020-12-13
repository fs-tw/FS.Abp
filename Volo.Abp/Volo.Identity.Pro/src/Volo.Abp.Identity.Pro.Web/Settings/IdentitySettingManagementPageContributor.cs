using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using System.Threading.Tasks;
using Volo.Abp.Identity.Localization;
using Volo.Abp.Identity.Web.Pages.Identity.Components.IdentitySettingGroup;
using Volo.Abp.SettingManagement.Web.Pages.SettingManagement;

namespace Volo.Abp.Identity.Web.Settings
{
    public class IdentitySettingManagementPageContributor : ISettingPageContributor
    {
        public virtual async Task ConfigureAsync(SettingPageCreationContext context)
        {
            if (!await CheckPermissionsInternalAsync(context))
            {
                return;
            }

            var l = context.ServiceProvider.GetRequiredService<IStringLocalizer<IdentityResource>>();
            context.Groups.Add(
                new SettingPageGroup(
                    "Volo.Abp.Identity",
                    l["Menu:IdentityManagement"],
                    typeof(IdentitySettingGroupViewComponent)
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

            return await authorizationService.IsGrantedAsync(IdentityPermissions.SettingManagement);
        }
    }
}
