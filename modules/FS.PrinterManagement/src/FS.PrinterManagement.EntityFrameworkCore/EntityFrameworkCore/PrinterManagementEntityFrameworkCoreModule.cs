using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(PrinterManagementDomainModule)
    )]
    [DependsOn(typeof(FS.Printer.Printing.EntityFrameworkCore.PrintingEntityFrameworkCoreModule))]
    public class PrinterManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<PrinterManagementDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
                options.AddDefaultRepositories(true);
            });
        }
    }
}