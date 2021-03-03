using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Theme.EntityFrameworkCore
{
    [DependsOn(
        typeof(ThemeDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(
        typeof(FS.Abp.EntityFrameworkCore.AbpEntityFrameworkCoreModule)
        )]
    public class ThemeEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ThemeDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });

            context.Services.AddTreeRepository<ThemeDbContext>();
        }
    }
}