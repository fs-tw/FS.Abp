using FS.Printer.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Printer;

/* Domain tests are configured to use the EF Core provider.
 * You can switch to MongoDB, however your domain tests should be
 * database independent anyway.
 */
[DependsOn(
    typeof(PrinterEntityFrameworkCoreTestModule)
    )]
public class PrinterDomainTestModule : AbpModule
{

}
