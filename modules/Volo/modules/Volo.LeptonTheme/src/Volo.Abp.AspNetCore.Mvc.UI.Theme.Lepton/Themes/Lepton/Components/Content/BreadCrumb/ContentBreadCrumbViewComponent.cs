using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Layout;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.Content.BreadCrumb
{
    public class ContentBreadCrumbViewComponent: LeptonViewComponentBase
    {
        protected IPageLayout PageLayout { get; }

        public ContentBreadCrumbViewComponent(IPageLayout pageLayout)
        {
            PageLayout = pageLayout;
        }

        public IViewComponentResult Invoke()
        {
            return View("~/Themes/Lepton/Components/Content/BreadCrumb/Default.cshtml", PageLayout.Content);
        }
    }
}
