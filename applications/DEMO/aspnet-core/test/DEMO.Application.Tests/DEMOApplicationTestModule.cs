using Volo.Abp.Modularity;

namespace DEMO
{
    [DependsOn(
        typeof(DEMOApplicationModule),
        typeof(DEMODomainTestModule)
        )]
    public class DEMOApplicationTestModule : AbpModule
    {

    }
}