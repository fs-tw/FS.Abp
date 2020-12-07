using FS.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(AbpEntityFrameworkCoreTestModule)
        )]
    public class AbpDomainTestModule : AbpModule
    {
        
    }
}
