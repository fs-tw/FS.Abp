using FS.CmsKitManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.CmsKitManagement.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class CmsKitManagementPageModel : AbpPageModel
    {
        protected CmsKitManagementPageModel()
        {
            LocalizationResourceType = typeof(CmsKitManagementResource);
            ObjectMapperContext = typeof(CmsKitManagementWebModule);
        }
    }
}