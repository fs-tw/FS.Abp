using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Layout;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.Content.Title
{
    public class ContentTitleViewComponent: LeptonViewComponentBase
    {
        private readonly IPageLayout _pageLayout;

        public ContentTitleViewComponent(IPageLayout pageLayout)
        {
            _pageLayout = pageLayout;
        }

        public IViewComponentResult Invoke()
        {
            return View("~/Themes/Lepton/Components/Content/Title/Default.cshtml", _pageLayout.Content.Title);
        }
    }
}
