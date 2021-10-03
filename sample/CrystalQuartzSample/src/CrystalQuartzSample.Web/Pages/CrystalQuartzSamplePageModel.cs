using CrystalQuartzSample.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace CrystalQuartzSample.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class CrystalQuartzSamplePageModel : AbpPageModel
    {
        protected CrystalQuartzSamplePageModel()
        {
            LocalizationResourceType = typeof(CrystalQuartzSampleResource);
        }
    }
}