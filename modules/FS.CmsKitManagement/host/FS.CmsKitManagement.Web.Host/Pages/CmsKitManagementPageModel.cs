using FS.CmsKitManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.CmsKitManagement.Pages
{
    public abstract class CmsKitManagementPageModel : AbpPageModel
    {
        protected CmsKitManagementPageModel()
        {
            LocalizationResourceType = typeof(CmsKitManagementResource);
        }
    }
}