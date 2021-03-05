using System.Threading.Tasks;
using FS.Abp.File.Localization;
using Volo.Abp.UI.Navigation;

namespace FS.Abp.File.Blazor.Host
{
    public class FileHostMenuContributor : IMenuContributor
    {
        public Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if(context.Menu.DisplayName != StandardMenus.Main)
            {
                return Task.CompletedTask;
            }

            var l = context.GetLocalizer<FileResource>();

            context.Menu.Items.Insert(
                0,
                new ApplicationMenuItem(
                    "File.Home",
                    l["Menu:Home"],
                    "/",
                    icon: "fas fa-home"
                )
            );

            return Task.CompletedTask;
        }
    }
}
