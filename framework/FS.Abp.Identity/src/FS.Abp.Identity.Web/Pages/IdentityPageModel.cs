using FS.Abp.Identity.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Identity.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class IdentityPageModel : AbpPageModel
{
    protected IdentityPageModel()
    {
        LocalizationResourceType = typeof(IdentityResource);
        ObjectMapperContext = typeof(IdentityWebModule);
    }
}
