using Microsoft.AspNetCore.Mvc;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.Header
{
    public class HeaderViewComponent : LeptonViewComponentBase
    {
        public IViewComponentResult Invoke()
        {
            return View("~/Themes/Lepton/Components/Header/Default.cshtml");
        }
    }
}
