using Volo.Abp.Modularity;

namespace WB
{
    [DependsOn(
        typeof(WBApplicationModule),
        typeof(WBDomainTestModule)
        )]
    public class WBApplicationTestModule : AbpModule
    {

    }
}