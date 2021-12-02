using FS.Abp.Metadata.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Metadata.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class MetadataPageModel : AbpPageModel
    {
        protected MetadataPageModel()
        {
            LocalizationResourceType = typeof(MetadataResource);
            ObjectMapperContext = typeof(MetadataWebModule);
        }
    }
}