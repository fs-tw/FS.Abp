using FS.Wbm.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Wbm
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(WbmEntityFrameworkCoreTestModule)
        )]
    public class WbmDomainTestModule : AbpModule
    {
        
    }
}
