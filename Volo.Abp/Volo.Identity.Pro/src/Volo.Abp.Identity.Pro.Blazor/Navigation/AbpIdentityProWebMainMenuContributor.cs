using System.Threading.Tasks;
using Volo.Abp.Identity.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.Identity.Pro.Blazor.Navigation
{
    public class AbpIdentityProWebMainMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name != StandardMenus.Main)
            {
                return;
            }

            var hasRolePermission = await context.IsGrantedAsync(IdentityPermissions.Roles.Default);
            var hasUserPermission = await context.IsGrantedAsync(IdentityPermissions.Users.Default);
            var hasClaimsPermission = await context.IsGrantedAsync(IdentityPermissions.ClaimTypes.Default);
            var hasSecurityLogsPermission = await context.IsGrantedAsync(IdentityPermissions.SecurityLogs.Default);
            
            if (hasRolePermission || hasUserPermission || hasClaimsPermission || hasSecurityLogsPermission)
            {
                var administrationMenu = context.Menu.GetAdministration();

                var l = context.GetLocalizer<IdentityResource>();

                var identityMenuItem = new ApplicationMenuItem(IdentityProMenus.GroupName, l["Menu:IdentityManagement"], icon: "fa fa-id-card");
                administrationMenu.AddItem(identityMenuItem);

                if (hasRolePermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityProMenus.Roles, l["Roles"], url: "/identity/roles"));
                }

                if (hasUserPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityProMenus.Users, l["Users"], url: "/identity/users"));
                }
                
                if (hasClaimsPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityProMenus.ClaimTypes, l["ClaimTypes"], url: "/identity/claim-types"));
                }
                
                if (hasSecurityLogsPermission)
                {
                    identityMenuItem.AddItem(new ApplicationMenuItem(IdentityProMenus.SecurityLogs, l["SecurityLogs"], url: "/identity/security-logs"));
                }
            }
        }
    }
}
