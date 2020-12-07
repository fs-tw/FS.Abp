using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.LanguageManagement.EntityFrameworkCore;
using Volo.Saas.EntityFrameworkCore;
using Volo.Abp.TextTemplateManagement.EntityFrameworkCore;

namespace FS.Abp.EntityFrameworkCore
{
    [DependsOn(
        typeof(AbpDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(typeof(LanguageManagementEntityFrameworkCoreModule))]
    [DependsOn(typeof(SaasEntityFrameworkCoreModule))]
    [DependsOn(typeof(TextTemplateManagementEntityFrameworkCoreModule))]
    public class AbpEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<AbpDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}