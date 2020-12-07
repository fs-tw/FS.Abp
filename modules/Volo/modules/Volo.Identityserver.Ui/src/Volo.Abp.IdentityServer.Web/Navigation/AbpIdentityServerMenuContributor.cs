using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using System.Threading.Tasks;
using Volo.Abp.IdentityServer.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.IdentityServer.Web.Navigation
{
    public class AbpIdentityServerMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenu(context);
            }
        }

        protected virtual async Task ConfigureMainMenu(MenuConfigurationContext context)
        {
            var l = context.GetLocalizer<AbpIdentityServerResource>();

            var identityServerMenuItem = new ApplicationMenuItem(
                AbpIdentityServerMenuNames.GroupName,
                l["Menu:IdentityServer"],
                icon: "fa fa-server"
            );

            context.Menu.GetAdministration().AddItem(identityServerMenuItem);

            var hasClientAccessPermission = await context.IsGrantedAsync(AbpIdentityServerPermissions.Client.Default);
            if (hasClientAccessPermission)
            {
                identityServerMenuItem.AddItem(new ApplicationMenuItem(AbpIdentityServerMenuNames.Clients, l["Menu:Clients"], "~/IdentityServer/Clients"));
            }

            var hasApiResourceAccessPermission = await context.IsGrantedAsync(AbpIdentityServerPermissions.ApiResource.Default);
            if (hasApiResourceAccessPermission)
            {
                identityServerMenuItem.AddItem(new ApplicationMenuItem(AbpIdentityServerMenuNames.IdentityResources, l["Menu:IdentityResources"], "~/IdentityServer/IdentityResources"));
            }

            var hasIdentityResourceAccessPermission = await context.IsGrantedAsync(AbpIdentityServerPermissions.IdentityResource.Default);
            if (hasIdentityResourceAccessPermission)
            {
                identityServerMenuItem.AddItem(new ApplicationMenuItem(AbpIdentityServerMenuNames.ApiResources, l["Menu:ApiResources"], "~/IdentityServer/ApiResources"));
            }

            var hasApiScopeAccessPermission = await context.IsGrantedAsync(AbpIdentityServerPermissions.ApiScope.Default);
            if (hasApiScopeAccessPermission)
            {
                identityServerMenuItem.AddItem(new ApplicationMenuItem(AbpIdentityServerMenuNames.ApiScopes, l["Menu:ApiScopes"], "~/IdentityServer/ApiScopes"));
            }
        }
    }
}
