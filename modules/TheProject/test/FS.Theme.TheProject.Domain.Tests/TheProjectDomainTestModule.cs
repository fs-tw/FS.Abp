using FS.Theme.TheProject.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Theme.TheProject
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(TheProjectEntityFrameworkCoreTestModule)
        )]
    public class TheProjectDomainTestModule : AbpModule
    {
        
    }
}
