using System.Threading.Tasks;
using FS.Abp.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.Blazor.Menus
{
    public class AbpMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private static async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            //Add main menu items.
            var l = context.GetLocalizer<AbpResource>();

            await Task.CompletedTask;
        }
    }
}