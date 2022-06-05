using FS.Coding.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Coding;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(CodingEntityFrameworkCoreTestModule)
    )]
public class CodingDomainTestModule : AbpModule
{

}
