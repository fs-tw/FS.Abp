using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.UI.Navigation;
using Volo.Saas.Localization;

namespace Volo.Saas.Host.Navigation
{
    public class SaasHostMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name != StandardMenus.Main)
            {
                return;
            }

            var administrationMenu = context.Menu.GetAdministration();

            var l = context.GetLocalizer<SaasResource>();

            var saasMenu = new ApplicationMenuItem(SaasHostMenuNames.GroupName, l["Menu:Saas"], icon: "fa fa-globe");
            administrationMenu.AddItem(saasMenu);

            if (await context.IsGrantedAsync(SaasHostPermissions.Tenants.Default))
            {
                saasMenu.AddItem(new ApplicationMenuItem(SaasHostMenuNames.Tenants, l["Tenants"], url: "~/Saas/Host/Tenants"));
                saasMenu.AddItem(new ApplicationMenuItem(SaasHostMenuNames.Editions, l["Editions"], url: "~/Saas/Host/Editions"));
            }
        }
    }
}
