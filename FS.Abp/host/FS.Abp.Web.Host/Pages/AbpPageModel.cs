using FS.Abp.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Pages
{
    public abstract class AbpPageModel : AbpPageModel
    {
        protected AbpPageModel()
        {
            LocalizationResourceType = typeof(AbpResource);
        }
    }
}