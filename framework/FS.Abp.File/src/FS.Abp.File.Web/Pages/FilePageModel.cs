using FS.Abp.File.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.File.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class FilePageModel : AbpPageModel
    {
        protected FilePageModel()
        {
            LocalizationResourceType = typeof(FileResource);
            ObjectMapperContext = typeof(FileWebModule);
        }
    }
}