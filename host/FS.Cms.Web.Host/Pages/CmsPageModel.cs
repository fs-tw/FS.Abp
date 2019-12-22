using FS.Cms.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Cms.Pages
{
    public abstract class CmsPageModel : AbpPageModel
    {
        protected CmsPageModel()
        {
            LocalizationResourceType = typeof(CmsResource);
        }
    }
}