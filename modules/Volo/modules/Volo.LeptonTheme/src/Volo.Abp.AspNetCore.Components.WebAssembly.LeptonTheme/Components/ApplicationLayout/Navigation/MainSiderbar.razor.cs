using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming;
using Volo.Abp.LeptonTheme.Management;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.Navigation
{
    public partial class MainSiderbar : IDisposable
    {
        [Inject]
        protected MainMenuProvider MainMenuProvider { get; set; }

        protected MenuViewModel Menu { get; set; }

        [Parameter]
        public EventCallback OnClickCallback { get; set; }

        protected async override Task OnInitializedAsync()
        {
            Menu = await MainMenuProvider.GetMenuAsync();
            Menu.StateChanged += Menu_StateChanged;
        }

        private void Menu_StateChanged(object sender, EventArgs e)
        {
            StateHasChanged();
        }

        public void Dispose()
        {
            Menu.StateChanged -= Menu_StateChanged;
        }
    }
}
