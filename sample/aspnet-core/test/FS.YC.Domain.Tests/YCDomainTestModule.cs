using FS.YC.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.YC
{
    [DependsOn(
        typeof(YCEntityFrameworkCoreTestModule)
        )]
    public class YCDomainTestModule : AbpModule
    {

    }
}