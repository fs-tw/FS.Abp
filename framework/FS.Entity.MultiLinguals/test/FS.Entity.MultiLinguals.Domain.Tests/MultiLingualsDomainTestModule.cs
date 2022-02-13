using FS.Entity.MultiLinguals.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Entity.MultiLinguals;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(MultiLingualsEntityFrameworkCoreTestModule)
    )]
public class MultiLingualsDomainTestModule : AbpModule
{

}
