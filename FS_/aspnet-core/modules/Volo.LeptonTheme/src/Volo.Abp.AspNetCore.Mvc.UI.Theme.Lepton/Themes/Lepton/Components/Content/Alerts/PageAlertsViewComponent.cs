using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Alerts;

namespace Volo.Abp.AspNetCore.Mvc.UI.Theme.Lepton.Themes.Lepton.Components.Content.Alerts
{
    public class ContentAlertsViewComponent: LeptonViewComponentBase
    {
        private readonly IAlertManager _alertManager;

        public ContentAlertsViewComponent(IAlertManager alertManager)
        {
            _alertManager = alertManager;
        }

        public IViewComponentResult Invoke(string name)
        {
            return View("~/Themes/Lepton/Components/Content/Alerts/Default.cshtml", _alertManager.Alerts);
        }
    }
}
