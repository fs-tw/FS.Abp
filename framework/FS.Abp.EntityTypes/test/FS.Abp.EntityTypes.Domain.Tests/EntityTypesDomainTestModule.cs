using FS.Abp.EntityTypes.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(EntityTypesEntityFrameworkCoreTestModule)
        )]
    public class EntityTypesDomainTestModule : AbpModule
    {
        
    }
}
