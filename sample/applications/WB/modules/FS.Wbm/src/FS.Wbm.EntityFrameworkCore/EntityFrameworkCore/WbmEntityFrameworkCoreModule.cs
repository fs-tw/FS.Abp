using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Wbm.EntityFrameworkCore
{
    [DependsOn(
        typeof(WbmDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(typeof(FS.Abp.EntityFrameworkCore.AbpEntityFrameworkCoreModule))]
    public class WbmEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<WbmDbContext>(options =>
            {
                options.AddDefaultRepositories(true);
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}