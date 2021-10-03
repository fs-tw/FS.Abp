using CrystalQuartzSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace CrystalQuartzSample
{
    [DependsOn(
        typeof(CrystalQuartzSampleEntityFrameworkCoreTestModule)
        )]
    public class CrystalQuartzSampleDomainTestModule : AbpModule
    {

    }
}