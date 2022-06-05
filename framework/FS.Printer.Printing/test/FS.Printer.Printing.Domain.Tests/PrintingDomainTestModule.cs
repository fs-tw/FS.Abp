using FS.Printer.Printing.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Printer.Printing;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(PrintingEntityFrameworkCoreTestModule)
    )]
public class PrintingDomainTestModule : AbpModule
{

}
