using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.Header.Brand
{
    public class HeaderBrandViewComponent: LeptonViewComponentBase
    {
        public IViewComponentResult Invoke()
        {
            return View("~/Themes/Lepton/Components/Header/Brand/Default.cshtml");
        }
    }
}
