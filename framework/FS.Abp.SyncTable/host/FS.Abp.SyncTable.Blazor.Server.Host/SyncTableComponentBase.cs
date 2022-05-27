using FS.Abp.SyncTable.Localization;
using Volo.Abp.AspNetCore.Components;

namespace FS.Abp.SyncTable.Blazor.Server.Host;

public abstract class SyncTableComponentBase : AbpComponentBase
{
    protected SyncTableComponentBase()
    {
        LocalizationResource = typeof(SyncTableResource);
    }
}
