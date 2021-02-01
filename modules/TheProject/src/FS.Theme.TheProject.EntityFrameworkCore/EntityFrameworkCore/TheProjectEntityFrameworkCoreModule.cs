using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Theme.TheProject.EntityFrameworkCore
{
    [DependsOn(
        typeof(TheProjectDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(
        typeof(FS.Theme.EntityFrameworkCore.ThemeEntityFrameworkCoreModule)
        )]
    public class TheProjectEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<TheProjectDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}