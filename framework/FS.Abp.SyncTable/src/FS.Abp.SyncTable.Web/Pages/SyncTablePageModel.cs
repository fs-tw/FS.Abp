using FS.Abp.SyncTable.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.SyncTable.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class SyncTablePageModel : AbpPageModel
{
    protected SyncTablePageModel()
    {
        LocalizationResourceType = typeof(SyncTableResource);
        ObjectMapperContext = typeof(SyncTableWebModule);
    }
}
