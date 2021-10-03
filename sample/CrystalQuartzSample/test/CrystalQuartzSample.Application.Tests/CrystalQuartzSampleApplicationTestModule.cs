using Volo.Abp.Modularity;

namespace CrystalQuartzSample
{
    [DependsOn(
        typeof(CrystalQuartzSampleApplicationModule),
        typeof(CrystalQuartzSampleDomainTestModule)
        )]
    public class CrystalQuartzSampleApplicationTestModule : AbpModule
    {

    }
}