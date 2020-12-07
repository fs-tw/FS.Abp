using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.TextTemplateManagement.Authorization;
using Volo.Abp.TextTemplateManagement.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.TextTemplateManagement.Web.Navigation
{
    public class TextTemplateManagementMenuContributor : IMenuContributor
    {
        public async Task ConfigureMenuAsync(MenuConfigurationContext context)
        {
            if (context.Menu.Name == StandardMenus.Main)
            {
                await ConfigureMainMenuAsync(context);
            }
        }

        private async Task ConfigureMainMenuAsync(MenuConfigurationContext context)
        {
            if (!await context.IsGrantedAsync(TextTemplateManagementPermissions.TextTemplates.Default))
            {
                return;
            }

            var l = context.GetLocalizer<TextTemplateManagementResource>();

            var textTemplateManagementMenu =
                new ApplicationMenuItem(
                    TextTemplateManagementMainMenuNames.GroupName,
                    l["Menu:TextTemplates"],
                    "~/TextTemplates",
                    icon: "fa fa-text-width"
                );

            context.Menu.GetAdministration().AddItem(textTemplateManagementMenu);
        }
    }
}
