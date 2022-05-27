using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.Abp.SyncTable;

[DependsOn(
    typeof(SyncTableDomainSharedModule)
)]
[DependsOn(typeof(FS.Abp.Data.AbpDataModule))]
[DependsOn(typeof(Volo.Abp.EventBus.AbpEventBusModule))]
[DependsOn(typeof(Volo.Abp.SettingManagement.AbpSettingManagementDomainModule))]
public class SyncTableDomainModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        base.ConfigureServices(context);
    }
}
