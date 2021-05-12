using DEMO.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace DEMO
{
    [DependsOn(
        typeof(DEMOEntityFrameworkCoreTestModule)
        )]
    public class DEMODomainTestModule : AbpModule
    {

    }
}