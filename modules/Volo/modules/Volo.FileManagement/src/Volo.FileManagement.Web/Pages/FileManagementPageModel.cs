using Volo.FileManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace Volo.FileManagement.Web.Pages
{
    public abstract class FileManagementPageModel : AbpPageModel
    {
        protected FileManagementPageModel()
        {
            LocalizationResourceType = typeof(FileManagementResource);
            ObjectMapperContext = typeof(FileManagementWebModule);
        }
    }
}