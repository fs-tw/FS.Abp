using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Layout;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.MainMenu
{
    public class MainMenuViewComponent: LeptonViewComponentBase
    {
        protected IMenuManager MenuManager { get; }
        protected IPageLayout PageLayout { get; }

        public MainMenuViewComponent(IMenuManager menuManager, IPageLayout pageLayout)
        {
            MenuManager = menuManager;
            PageLayout = pageLayout;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var menu = await MenuManager.GetAsync(StandardMenus.Main);
            var viewModel = ObjectMapper.Map<ApplicationMenu, MenuViewModel>(menu);

            if (!PageLayout.Content.MenuItemName.IsNullOrEmpty())
            {
                SetActiveMenuItems(viewModel.Items, PageLayout.Content.MenuItemName);
            }

            return View(
                "~/Themes/Lepton/Components/MainMenu/Default.cshtml",
                viewModel
            );
        }

        protected virtual bool SetActiveMenuItems(IList<MenuItemViewModel> items, string activeMenuItemName)
        {
            foreach (var item in items)
            {
                if (item.MenuItem.Name == activeMenuItemName || 
                    SetActiveMenuItems(item.Items, activeMenuItemName))
                {
                    item.IsActive = true;
                    return true;
                }
            }

            return false;
        }
    }
}
