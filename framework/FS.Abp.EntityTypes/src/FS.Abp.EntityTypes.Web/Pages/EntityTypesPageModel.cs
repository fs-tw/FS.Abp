using FS.Abp.EntityTypes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.EntityTypes.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class EntityTypesPageModel : AbpPageModel
    {
        protected EntityTypesPageModel()
        {
            LocalizationResourceType = typeof(EntityTypesResource);
            ObjectMapperContext = typeof(EntityTypesWebModule);
        }
    }
}