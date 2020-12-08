using System.Collections.Generic;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.MainMenu
{
    public class MenuViewModel
    {
        public ApplicationMenu Menu { get; set; }

        public IList<MenuItemViewModel> Items { get; set; }
    }
}