using WB.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace WB
{
    [DependsOn(
        typeof(WBEntityFrameworkCoreTestModule)
        )]
    public class WBDomainTestModule : AbpModule
    {

    }
}