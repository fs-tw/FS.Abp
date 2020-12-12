using FS.Abp.Localization;

namespace FS.Abp.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class AbpPageModel : Volo.Abp.AspNetCore.Mvc.UI.RazorPages.AbpPageModel
    {
        protected AbpPageModel()
        {
            LocalizationResourceType = typeof(AbpResource);
            ObjectMapperContext = typeof(AbpWebModule);
        }
    }
}