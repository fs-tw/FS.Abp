using System.Threading.Tasks;
using Volo.Abp.UI.Navigation;

namespace Volo.Saas.Tenant.Navigation
{
    public class SaasTenantMenuContributor : IMenuContributor
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
