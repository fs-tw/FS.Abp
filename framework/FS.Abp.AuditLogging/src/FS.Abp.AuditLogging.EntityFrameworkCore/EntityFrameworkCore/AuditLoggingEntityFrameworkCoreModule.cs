using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.AuditLogging.EntityFrameworkCore
{
    [DependsOn(
        typeof(AuditLoggingDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class AuditLoggingEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<AuditLoggingDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}