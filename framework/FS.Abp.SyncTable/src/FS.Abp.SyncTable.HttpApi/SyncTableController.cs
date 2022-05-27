using FS.Abp.SyncTable.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.SyncTable;

public abstract class SyncTableController : AbpControllerBase
{
    protected SyncTableController()
    {
        LocalizationResource = typeof(SyncTableResource);
    }
}
