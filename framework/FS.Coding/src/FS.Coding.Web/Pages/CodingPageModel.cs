using FS.Coding.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Coding.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class CodingPageModel : AbpPageModel
{
    protected CodingPageModel()
    {
        LocalizationResourceType = typeof(CodingResource);
        ObjectMapperContext = typeof(CodingWebModule);
    }
}
