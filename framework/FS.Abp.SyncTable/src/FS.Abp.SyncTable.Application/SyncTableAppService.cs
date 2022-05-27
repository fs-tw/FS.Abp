using FS.Abp.SyncTable.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.SyncTable;

public abstract class SyncTableAppService : ApplicationService
{
    protected SyncTableAppService()
    {
        LocalizationResource = typeof(SyncTableResource);
        ObjectMapperContext = typeof(SyncTableApplicationModule);
    }
}
