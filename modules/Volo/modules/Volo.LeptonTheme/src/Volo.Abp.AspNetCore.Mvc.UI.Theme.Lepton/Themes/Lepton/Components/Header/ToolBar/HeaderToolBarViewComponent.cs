using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Toolbars;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.Header.ToolBar
{
    public class HeaderToolBarViewComponent: LeptonViewComponentBase
    {
        private readonly IToolbarManager _toolbarManager;

        public HeaderToolBarViewComponent(IToolbarManager toolbarManager)
        {
            _toolbarManager = toolbarManager;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var toolbar = await _toolbarManager.GetAsync(StandardToolbars.Main);
            return View("~/Themes/Lepton/Components/Header/ToolBar/Default.cshtml", toolbar);
        }
    }
}
