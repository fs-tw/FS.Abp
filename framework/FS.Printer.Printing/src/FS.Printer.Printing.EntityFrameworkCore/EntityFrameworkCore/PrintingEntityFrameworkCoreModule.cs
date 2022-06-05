using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Printer.Printing.EntityFrameworkCore;

[DependsOn(
    typeof(PrintingDomainModule)
)]
[DependsOn(typeof(FS.Printer.EntityFrameworkCore.PrinterEntityFrameworkCoreModule))]
public class PrintingEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<PrintingDbContext>(options =>
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
        });
    }
}
