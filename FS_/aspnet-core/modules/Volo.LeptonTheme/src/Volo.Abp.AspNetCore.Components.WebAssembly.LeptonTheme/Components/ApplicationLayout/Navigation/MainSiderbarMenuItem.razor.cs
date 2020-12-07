using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Routing;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.Navigation
{
    public partial class MainSiderbarMenuItem : IDisposable
    {
        [Inject]
        protected NavigationManager NavigationManager { get; set; }

        [Parameter]
        public MenuViewModel Menu { get; set; }

        [Parameter]
        public MenuItemViewModel MenuItem { get; set; }

        protected override void OnParametersSet()
        {
            ActivateIfCurrentPage();
        }

        protected override void OnInitialized()
        {
            NavigationManager.LocationChanged += OnLocationChanged;
        }

        protected virtual void OnLocationChanged(object sender, LocationChangedEventArgs e)
        {
            ActivateIfCurrentPage();
        }

        protected virtual void ActivateIfCurrentPage()
        {
            if (MenuItem.MenuItem.Url.IsNullOrEmpty())
            {
                return;
            }

            var absUrl = NavigationManager.ToAbsoluteUri(MenuItem.MenuItem.Url).AbsoluteUri;
            if (absUrl.TrimEnd('/') == NavigationManager.Uri.TrimEnd('/'))
            {
                Menu.Activate(MenuItem);
            }
        }

        protected virtual void ToggleMenu()
        {
            Menu.ToggleOpen(MenuItem);
        }

        protected virtual Task NagivateAsync()
        {
            NavigationManager.NavigateTo(MenuItem.MenuItem.Url);
            return Task.CompletedTask;
        }

        public virtual void Dispose()
        {
            NavigationManager.LocationChanged -= OnLocationChanged;
        }
    }
}
