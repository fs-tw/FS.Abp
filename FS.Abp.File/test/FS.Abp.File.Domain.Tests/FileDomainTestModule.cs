using FS.Abp.File.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.File
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(FileEntityFrameworkCoreTestModule)
        )]
    public class FileDomainTestModule : AbpModule
    {
        
    }
}
