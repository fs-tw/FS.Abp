using Microsoft.AspNetCore.Mvc;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Saas.Host.Pages.Shared.Components.SaasLatestTenantsWidget;

namespace Volo.Saas.Host.Pages.Shared.Components
{
    [Area("saas")]
    [Route("SaasWidgets")]
    [RemoteService(false)]
    [ApiExplorerSettings(IgnoreApi = true)]
    public class SaasWidgetController : AbpController
    {
        public SaasWidgetController()
        {
            ObjectMapperContext = typeof(SaasHostWebModule);
        }

        [HttpGet]
        [Route("LatestTenants")]
        public virtual IActionResult LatestTenants()
        {
            return ViewComponent(typeof(SaasLatestTenantsWidgetViewComponent));
        }
    }
}