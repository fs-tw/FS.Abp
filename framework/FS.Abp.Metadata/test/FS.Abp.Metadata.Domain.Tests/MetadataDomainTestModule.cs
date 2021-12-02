using FS.Abp.Metadata.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Metadata
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(MetadataEntityFrameworkCoreTestModule)
        )]
    public class MetadataDomainTestModule : AbpModule
    {
        
    }
}
