using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Entity.MultiLinguals.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class MultiLingualsPageModel : AbpPageModel
{
    protected MultiLingualsPageModel()
    {
        LocalizationResourceType = typeof(MultiLingualsResource);
        ObjectMapperContext = typeof(MultiLingualsWebModule);
    }
}
