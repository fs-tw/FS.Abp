using FS.Entity.EntityDefaults.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Entity.EntityDefaults;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(EntityDefaultsEntityFrameworkCoreTestModule)
    )]
public class EntityDefaultsDomainTestModule : AbpModule
{

}
