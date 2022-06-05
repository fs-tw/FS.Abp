using FS.Coding.Codes.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(CodesEntityFrameworkCoreTestModule)
    )]
public class CodesDomainTestModule : AbpModule
{

}
