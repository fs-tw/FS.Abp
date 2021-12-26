using CFTA.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace CFTA.Web.Public.Pages
{
    /* Inherit your Page Model classes from this class.
     */
    public abstract class CFTAPublicPageModel : AbpPageModel
    {
        protected CFTAPublicPageModel()
        {
            LocalizationResourceType = typeof(CFTAResource);
        }
    }
}
