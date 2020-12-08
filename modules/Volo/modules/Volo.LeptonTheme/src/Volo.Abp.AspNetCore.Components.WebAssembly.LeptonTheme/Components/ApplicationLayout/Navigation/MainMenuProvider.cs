using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.ObjectMapping;
using Volo.Abp.UI.Navigation;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.Navigation
{
    public class MainMenuProvider : ISingletonDependency
    {
        private readonly IMenuManager _menuManager;
        private readonly IObjectMapper<AbpAspNetCoreComponentsWebAssemblyLeptonThemeModule> _objectMapper;
        private readonly ILeptonSettingsProvider _leptonSettings;

        private MenuViewModel Menu { get; set; }

        public MainMenuProvider(
            IMenuManager menuManager,
            IObjectMapper<AbpAspNetCoreComponentsWebAssemblyLeptonThemeModule> objectMapper,
            ILeptonSettingsProvider leptonSettings)
        {
            _menuManager = menuManager;
            _objectMapper = objectMapper;
            _leptonSettings = leptonSettings;
        }

        public async Task<MenuViewModel> GetMenuAsync()
        {
            if (Menu == null)
            {
                var menu = await _menuManager.GetAsync(StandardMenus.Main);
                Menu = _objectMapper.Map<ApplicationMenu, MenuViewModel>(menu);
                Menu.SetParents();
                Menu.Placement = await _leptonSettings.GetMenuPlacementAsync();
                Menu.NavBarStatus = await _leptonSettings.GetMenuStatusAsync();
            }

            return Menu;
        }
    }
}
