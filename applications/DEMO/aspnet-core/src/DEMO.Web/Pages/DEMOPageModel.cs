using DEMO.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace DEMO.Web.Pages
{
    public abstract class DEMOPageModel : AbpPageModel
    {
        protected DEMOPageModel()
        {
            LocalizationResourceType = typeof(DEMOResource);
        }
    }
}