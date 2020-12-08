using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;
using Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.Navigation;
using Volo.Abp.LeptonTheme.Management;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.MainHeader
{
    public partial class MainHeader : IDisposable
    {
        public bool IsToolbarNavShown { get; set; }
        public bool IsSidebarNavShown { get; set; }

        [Inject]
        private NavigationManager NavigationManager { get; set; }

         [Inject]
        protected MainMenuProvider MainMenuProvider { get; set; }

        [Inject]
        private IAbpUtilsService UtilsService { get; set; }

        protected MenuViewModel Menu { get; set; }

        protected async override Task OnInitializedAsync()
        {
            Menu = await MainMenuProvider.GetMenuAsync();
            await SetBodyClassesAsync();
            Menu.StateChanged += RefreshMenu;
            NavigationManager.LocationChanged += OnLocationChanged;
        }

        private void OnLocationChanged(object sender, LocationChangedEventArgs e)
        {
            IsSidebarNavShown = false;
        }

        private void ToggleToolbarNav()
        {
            IsToolbarNavShown = !IsToolbarNavShown;
        }

        private void ToggleSidebarNav()
        {
            IsSidebarNavShown = !IsSidebarNavShown;
        }

        private async Task SetBodyClassesAsync()
        {
            //TODO: Does setting body classes so frequently effects performance?

            if (Menu.Placement == MenuPlacement.Top)
            {
                await UtilsService.AddClassToTagAsync("body", "lp-topmenu");
            }
            else
            {
                if (Menu.NavBarStatus == MenuStatus.OpenOnHover)
                {
                    await UtilsService.AddClassToTagAsync("body", "lp-closed");
                    await UtilsService.RemoveClassFromTagAsync("body", "lp-opened-sidebar");
                    await UtilsService.RemoveClassFromTagAsync("body", "lp-body-fixed");
                }
                else
                {
                    await UtilsService.RemoveClassFromTagAsync("body", "lp-closed");
                    await UtilsService.AddClassToTagAsync("body", "lp-opened-sidebar");
                    await UtilsService.AddClassToTagAsync("body", "lp-body-fixed");
                }
            }
        }

        public void Dispose()
        {
            Menu.StateChanged -= RefreshMenu;
            NavigationManager.LocationChanged -= OnLocationChanged;
        }

        private async Task ToggleNavbarStatusAsync()
        {
            Menu.ToggleNavbarStatus();
            await SetBodyClassesAsync();
        }

        private async Task OnNavBarMouseOverAsync()
        {
            //TODO: MOUSEOVER IS NOT PERFORMANT, WE SHOULD USE MOUSEENTER/MOUSELEAVE

            if (Menu.NavBarStatus == MenuStatus.OpenOnHover)
            {
                if (await UtilsService.HasClassOnTagAsync("body", "lp-closed"))
                {
                    await UtilsService.AddClassToTagAsync("body", "lp-extended");
                }
            }
        }

        private async Task OnNavbarMouseOutAsync()
        {
            if (Menu.NavBarStatus == MenuStatus.OpenOnHover)
            {
                if (await UtilsService.HasClassOnTagAsync("body", "lp-closed"))
                {
                    await UtilsService.RemoveClassFromTagAsync("body", "lp-extended");
                }
            }
        }

        private void RefreshMenu(object sender, EventArgs e)
        {
            StateHasChanged();
        }
    }
}
