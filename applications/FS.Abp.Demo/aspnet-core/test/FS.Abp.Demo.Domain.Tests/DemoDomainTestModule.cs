using FS.Abp.Demo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Demo
{
    [DependsOn(
        typeof(DemoEntityFrameworkCoreTestModule)
        )]
    public class DemoDomainTestModule : AbpModule
    {

    }
}