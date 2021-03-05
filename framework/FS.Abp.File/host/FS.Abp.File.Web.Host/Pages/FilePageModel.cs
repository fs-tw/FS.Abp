using FS.Abp.File.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.File.Pages
{
    public abstract class FilePageModel : AbpPageModel
    {
        protected FilePageModel()
        {
            LocalizationResourceType = typeof(FileResource);
        }
    }
}