using FS.Abp.Authentication.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Authentication.Pages
{
    public abstract class AuthenticationPageModel : AbpPageModel
    {
        protected AuthenticationPageModel()
        {
            LocalizationResourceType = typeof(AbpAuthenticationResource);
        }
    }
}