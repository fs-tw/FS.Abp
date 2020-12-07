using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;
using Volo.FileManagement.Localization;

namespace Volo.FileManagement.Pages
{
    public abstract class FileManagementPageModel : AbpPageModel
    {
        protected FileManagementPageModel()
        {
            LocalizationResourceType = typeof(FileManagementResource);
        }
    }
}