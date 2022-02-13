using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Entity.EntityFeatures.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class EntityFeaturesPageModel : AbpPageModel
{
    protected EntityFeaturesPageModel()
    {
        LocalizationResourceType = typeof(EntityFeaturesResource);
        ObjectMapperContext = typeof(EntityFeaturesWebModule);
    }
}
