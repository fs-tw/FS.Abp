using FS.Theme.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Theme
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(ThemeEntityFrameworkCoreTestModule)
        )]
    public class ThemeDomainTestModule : AbpModule
    {
        
    }
}
