using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Entity.EntityDefaults.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class EntityDefaultsPageModel : AbpPageModel
{
    protected EntityDefaultsPageModel()
    {
        LocalizationResourceType = typeof(EntityDefaultsResource);
        ObjectMapperContext = typeof(EntityDefaultsWebModule);
    }
}
