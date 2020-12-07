using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using Volo.Abp.AspNetCore.Components.WebAssembly.Theming.Toolbars;

namespace Volo.Abp.AspNetCore.Components.WebAssembly.LeptonTheme.Components.ApplicationLayout.MainHeader
{
    public partial class MainHeaderToolbar
    {
        [Inject]
        private IToolbarManager ToolbarManager { get; set; }

        [Inject]
        private IAbpUtilsService AbpUtilsService { get; set; }

        private RenderFragment ToolbarRender { get; set; }

        private List<RenderFragment> ToolbarItemRenders { get; set; } = new List<RenderFragment>();

        private bool IsFullScreen { get; set; }

        protected async override Task OnInitializedAsync()
        {
            var toolbar = await ToolbarManager.GetAsync(StandardToolbars.Main);

            ToolbarItemRenders.Clear();

            foreach (var item in toolbar.Items)
            {
                ToolbarItemRenders.Add(builder =>
                {
                    builder.OpenComponent(0, item.ComponentType);
                    builder.CloseComponent();
                });
            }
        }

        private async Task ToogleFullScreen()
        {
            IsFullScreen = !IsFullScreen;
            if (IsFullScreen)
            {
                await AbpUtilsService.RequestFullscreenAsync();
            }
            else
            {
                await AbpUtilsService.ExitFullscreenAsync();
            }
        }
    }
}
