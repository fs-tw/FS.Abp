using FS.Abp.SyncTable.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.SyncTable;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(SyncTableEntityFrameworkCoreTestModule)
    )]
public class SyncTableDomainTestModule : AbpModule
{

}
