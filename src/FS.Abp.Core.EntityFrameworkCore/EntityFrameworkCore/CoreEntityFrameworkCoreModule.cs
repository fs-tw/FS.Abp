using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Core.EntityFrameworkCore
{
    [DependsOn(
        typeof(CoreDomainModule),
        typeof(AbpEntityFrameworkCoreModule),
        typeof(EasyAbp.Abp.Trees.EntityFrameworkCore.AbpTreesEntityFrameworkCoreModule),
        typeof(Volo.Abp.AuditLogging.EntityFrameworkCore.AbpAuditLoggingEntityFrameworkCoreModule)
    )]
    public class CoreEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CoreDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}