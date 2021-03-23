using FS.Abp.Authentication.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Authentication
{
    public abstract class AuthenticationController : AbpController
    {
        protected AuthenticationController()
        {
            LocalizationResource = typeof(AbpAuthenticationResource);
        }
    }
}
