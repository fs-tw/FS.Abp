using FS.CodingManagement.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.CodingManagement.Pages
{
    public abstract class CodingManagementPageModel : AbpPageModel
    {
        protected CodingManagementPageModel()
        {
            LocalizationResourceType = typeof(CodingManagementResource);
        }
    }
}