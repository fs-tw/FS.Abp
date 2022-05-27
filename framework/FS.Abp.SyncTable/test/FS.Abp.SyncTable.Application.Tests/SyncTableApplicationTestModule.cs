using Volo.Abp.Modularity;

namespace FS.Abp.SyncTable;

[DependsOn(
    typeof(SyncTableApplicationModule),
    typeof(SyncTableDomainTestModule)
    )]
public class SyncTableApplicationTestModule : AbpModule
{

}
