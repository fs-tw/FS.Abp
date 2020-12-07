using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Localization;
using Volo.Abp.LanguageManagement.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.LanguageManagement.Navigation
{
    public class LanguageManagementMenuContributor : IMenuContributor
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
            var l = context.GetLocalizer<LanguageManagementResource>();

            if (!await context.IsGrantedAsync(LanguageManagementPermissions.Languages.Default) &&
                !await context.IsGrantedAsync(LanguageManagementPermissions.LanguageTexts.Default))
            {
                return;
            }

            var languagesMenu = new ApplicationMenuItem(
                LanguageManagementMenuNames.GroupName,
                l["Menu:Languages"],
                "/LanguageManagement",
                icon: "fa fa-globe"
            );

            context.Menu.GetAdministration().AddItem(languagesMenu);

            if (await context.IsGrantedAsync(LanguageManagementPermissions.Languages.Default))
            {
                languagesMenu.AddItem(new ApplicationMenuItem(LanguageManagementMenuNames.Languages, l["Languages"], "~/LanguageManagement"));
            }
            if (await context.IsGrantedAsync(LanguageManagementPermissions.LanguageTexts.Default))
            {
                languagesMenu.AddItem(new ApplicationMenuItem(LanguageManagementMenuNames.Texts, l["LanguageTexts"], "~/LanguageManagement/Texts"));
            }
        }
    }
}
