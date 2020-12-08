using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Widgets;
using Volo.Saas.Host.Dtos;

namespace Volo.Saas.Host.Pages.Shared.Components.SaasLatestTenantsWidget
{
    [Widget(
        RequiredPolicies = new[] { SaasHostPermissions.Tenants.Default },
        RefreshUrl = "SaasWidgets/LatestTenants"
    )]
    public class SaasLatestTenantsWidgetViewComponent : SaasHostViewComponent
    {
        protected ITenantAppService TenantAppService { get; }

        public SaasLatestTenantsWidgetViewComponent(ITenantAppService tenantAppService)
        {
            TenantAppService = tenantAppService;
        }

        public virtual async Task<IViewComponentResult> InvokeAsync()
        {
            var result = await TenantAppService.GetListAsync(new GetTenantsInput
            {
                GetEditionNames = true,
                MaxResultCount = 6,
                SkipCount = 0,
                Sorting = "CreationTime desc"
            });

            return View("/Pages/Shared/Components/SaasLatestTenantsWidget/Default.cshtml", result);
        }
    }
}
