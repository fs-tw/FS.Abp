using Volo.Abp.Application.Services;
using Volo.Abp.IdentityServer.Localization;

namespace Volo.Abp.IdentityServer
{
    public abstract class IdentityServerAppServiceBase : ApplicationService
    {
        protected IdentityServerAppServiceBase()
        {
            ObjectMapperContext = typeof(AbpIdentityServerApplicationModule);
            LocalizationResource = typeof(AbpIdentityServerResource);
        }
    }
}