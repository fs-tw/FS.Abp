using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(AbpDddDomainModule),
        typeof(LineNotifyDomainSharedModule)
    )]
    public class LineNotifyDomainModule : AbpModule
    {

    }
}
