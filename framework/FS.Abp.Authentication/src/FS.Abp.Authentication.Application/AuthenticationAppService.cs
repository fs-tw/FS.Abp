using FS.Abp.Authentication.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.Authentication
{
    public abstract class AuthenticationAppService : ApplicationService
    {
        protected AuthenticationAppService()
        {
            LocalizationResource = typeof(AbpAuthenticationResource);
            ObjectMapperContext = typeof(AuthenticationApplicationModule);
        }
    }
}
