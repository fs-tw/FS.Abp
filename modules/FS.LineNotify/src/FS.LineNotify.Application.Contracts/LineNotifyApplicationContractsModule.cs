using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(LineNotifyDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class LineNotifyApplicationContractsModule : AbpModule
    {

    }
}
