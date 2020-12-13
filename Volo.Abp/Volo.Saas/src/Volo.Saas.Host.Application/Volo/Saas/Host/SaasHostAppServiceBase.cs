using Volo.Abp.Application.Services;
using Volo.Saas.Localization;

namespace Volo.Saas.Host
{
    public abstract class SaasHostAppServiceBase : ApplicationService
    {
        protected SaasHostAppServiceBase()
        {
            ObjectMapperContext = typeof(SaasHostApplicationModule);
            LocalizationResource = typeof(SaasResource);
        }
    }
}