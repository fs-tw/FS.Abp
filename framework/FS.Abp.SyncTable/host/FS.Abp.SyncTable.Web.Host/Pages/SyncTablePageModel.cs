using FS.Abp.SyncTable.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.SyncTable.Pages;

public abstract class SyncTablePageModel : AbpPageModel
{
    protected SyncTablePageModel()
    {
        LocalizationResourceType = typeof(SyncTableResource);
    }
}
