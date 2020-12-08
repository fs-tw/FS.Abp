using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;
using Volo.Saas.Host;
using Volo.Saas.Localization;

namespace Volo.Saas.Tenant.Blazor.Navigation
{
    public class SaasTenantMainMenuContributor : IMenuContributor
    {
        public virtual async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            //if (context.Menu.Name != StandardMenus.Main)
            //{
            //    return;
            //}

            //var administrationMenu = context.Menu.GetAdministration();

            //var l = context.GetLocalizer<SaasResource>();

            //var saasMenu = new ApplicationMenuItem(SaasTenantMenuNames.GroupName, l["Menu:Saas"], icon: "fa fa-users");
            //administrationMenu.AddItem(saasMenu);
        }
    }
}
