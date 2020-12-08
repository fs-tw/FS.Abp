using System.Threading.Tasks;
using Volo.Abp.LanguageManagement.Localization;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.LanguageManagement.Blazor.Menus
{
    public class LanguageManagementMenuContributor :IMenuContributor
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
            var hasLanguageDefaultPermission = await context.IsGrantedAsync(LanguageManagementPermissions.Languages.Default);
            var hasLanguageTextDefaultPermission = await context.IsGrantedAsync(LanguageManagementPermissions.LanguageTexts.Default);

            if (!hasLanguageDefaultPermission && !hasLanguageTextDefaultPermission)
            {
                return;
            }

            var languagesMenu = new ApplicationMenuItem(
                LanguageManagementMenus.GroupName,
                l["Menu:Languages"],
                icon: "fa fa-globe"
            );

            context.Menu.GetAdministration().AddItem(languagesMenu);

            if (hasLanguageDefaultPermission)
            {
                languagesMenu.AddItem(new ApplicationMenuItem(LanguageManagementMenus.Languages, l["Languages"], "/language-management/languages"));
            }
            if (hasLanguageTextDefaultPermission)
            {
                languagesMenu.AddItem(new ApplicationMenuItem(LanguageManagementMenus.Texts, l["LanguageTexts"], "/language-management/texts"));
            }
        }
    }
}
