using Volo.Abp.Modularity;

namespace FS.YC
{
    [DependsOn(
        typeof(YCApplicationModule),
        typeof(YCDomainTestModule)
        )]
    public class YCApplicationTestModule : AbpModule
    {

    }
}