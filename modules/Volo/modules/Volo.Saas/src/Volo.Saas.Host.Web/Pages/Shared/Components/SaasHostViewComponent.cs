using Volo.Abp.AspNetCore.Mvc;

namespace Volo.Saas.Host.Pages.Shared.Components
{
    public abstract class SaasHostViewComponent : AbpViewComponent
    {
        public SaasHostViewComponent()
        {
            ObjectMapperContext = typeof(SaasHostWebModule);
        }
    }
}