using Volo.Abp.Modularity;

namespace FS.Wbm
{
    [DependsOn(
        typeof(WbmApplicationModule),
        typeof(WbmDomainTestModule)
        )]
    public class WbmApplicationTestModule : AbpModule
    {

    }
}
