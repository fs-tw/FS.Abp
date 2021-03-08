using Volo.Abp.Modularity;

namespace FS.Abp.Core
{
    [DependsOn(
        typeof(CoreApplicationModule),
        typeof(CoreDomainTestModule)
        )]
    public class CoreApplicationTestModule : AbpModule
    {

    }
}
