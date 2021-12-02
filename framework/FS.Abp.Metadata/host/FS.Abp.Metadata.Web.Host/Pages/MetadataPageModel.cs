using FS.Abp.Metadata.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Metadata.Pages
{
    public abstract class MetadataPageModel : AbpPageModel
    {
        protected MetadataPageModel()
        {
            LocalizationResourceType = typeof(MetadataResource);
        }
    }
}