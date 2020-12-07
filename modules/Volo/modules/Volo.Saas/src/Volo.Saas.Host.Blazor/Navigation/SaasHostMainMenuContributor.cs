using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;
using Volo.Saas.Localization;

namespace Volo.Saas.Host.Blazor.Navigation
{
    public class SaasHostMainMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name != StandardMenus.Main)
            {
                return;
            }

            var administrationMenu = context.Menu.GetAdministration();

            var l = context.GetLocalizer<SaasResource>();

            var saasMenu = new ApplicationMenuItem(SaasHostMenus.GroupName, l["Menu:Saas"], icon: "fa fa-globe");
            administrationMenu.AddItem(saasMenu);

            if (await context.IsGrantedAsync(SaasHostPermissions.Tenants.Default))
            {
                saasMenu.AddItem(new ApplicationMenuItem(SaasHostMenus.Tenants, l["Tenants"], url: "/saas/host/tenants"));
                saasMenu.AddItem(new ApplicationMenuItem(SaasHostMenus.Editions, l["Editions"], url: "/saas/host/editions"));
            }
        }
    }
}
