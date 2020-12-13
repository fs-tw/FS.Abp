using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.Identity.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.Identity.Web.Navigation
{
    public class AbpIdentityWebMainMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name != StandardMenus.Main)
            {
                return;
            }

            var hasRolePermission = await context.IsGrantedAsync(IdentityPermissions.Roles.Default);
            var hasUserPermission = await context.IsGrantedAsync(IdentityPermissions.Users.Default);
            var hasOrganizationUnitPermission = await context.IsGrantedAsync(IdentityPermissions.OrganizationUnits.Default);
            var hasClaimsPermission = await context.IsGrantedAsync(IdentityPermissions.ClaimTypes.Default);
            var hasSecurityLogsPermission = await context.IsGrantedAsync(IdentityPermissions.SecurityLogs.Default);

            if (hasRolePermission || hasUserPermission || hasClaimsPermission || hasOrganizationUnitPermission || hasSecurityLogsPermission)
            {
                var l = context.GetLocalizer<IdentityResource>();

                var identityMenuItem = new ApplicationMenuItem(IdentityMenuNames.GroupName, l["Menu:IdentityManagement"], icon: "fa fa-id-card-o");

                if (hasOrganizationUnitPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityMenuNames.OrganizationUnits, l["OrganizationUnits"], url: "~/Identity/OrganizationUnits"));
                }

                if (hasRolePermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityMenuNames.Roles, l["Roles"], url: "~/Identity/Roles"));
                }

                if (hasUserPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityMenuNames.Users, l["Users"], url: "~/Identity/Users"));
                }

                if (hasClaimsPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityMenuNames.ClaimTypes, l["ClaimTypes"], url: "~/Identity/ClaimTypes"));
                }

                if (hasSecurityLogsPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityMenuNames.SecurityLogs, l["SecurityLogs"], url: "~/Identity/SecurityLogs"));
                }

                context.Menu.GetAdministration().AddItem(identityMenuItem);
            }
        }
    }
}
