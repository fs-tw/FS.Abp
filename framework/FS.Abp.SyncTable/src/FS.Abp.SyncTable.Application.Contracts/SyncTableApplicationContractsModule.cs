using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.Abp.SyncTable;

[DependsOn(
    typeof(SyncTableDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
    )]
public class SyncTableApplicationContractsModule : AbpModule
{

}
