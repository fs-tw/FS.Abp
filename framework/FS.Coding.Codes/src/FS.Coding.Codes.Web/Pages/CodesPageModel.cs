using FS.Coding.Codes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Coding.Codes.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class CodesPageModel : AbpPageModel
{
    protected CodesPageModel()
    {
        LocalizationResourceType = typeof(CodesResource);
        ObjectMapperContext = typeof(CodesWebModule);
    }
}
