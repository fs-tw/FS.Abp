using FS.Abp.Authentication.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Authentication.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class AuthenticationPageModel : AbpPageModel
    {
        protected AuthenticationPageModel()
        {
            LocalizationResourceType = typeof(AbpAuthenticationResource);
            ObjectMapperContext = typeof(AuthenticationWebModule);
        }
    }
}