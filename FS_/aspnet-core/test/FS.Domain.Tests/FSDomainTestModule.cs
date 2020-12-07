using FS.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS
{
    [DependsOn(
        typeof(FSEntityFrameworkCoreTestModule)
        )]
    public class FSDomainTestModule : AbpModule
    {

    }
}