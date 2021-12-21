using FS.Abp.EntityFeatures.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.EntityFeatures.Web.Pages
{
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
}