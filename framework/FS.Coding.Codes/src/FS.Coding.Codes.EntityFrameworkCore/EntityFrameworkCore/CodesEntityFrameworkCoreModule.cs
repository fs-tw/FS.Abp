using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Coding.Codes.EntityFrameworkCore;

[DependsOn(
    typeof(CodesDomainModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
[DependsOn(typeof(FS.Coding.EntityFrameworkCore.CodingEntityFrameworkCoreModule))]
[DependsOn(typeof(EasyAbp.Abp.Trees.EntityFrameworkCore.AbpTreesEntityFrameworkCoreModule))]
public class CodesEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<CodesDbContext>(options =>
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
        });
    }
}
