using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(CmsKitManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(typeof(FS.Abp.EntityFrameworkCore.AbpEntityFrameworkCoreModule))]
    [DependsOn(typeof(Volo.CmsKit.EntityFrameworkCore.CmsKitEntityFrameworkCoreModule))]
    public class CmsKitManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CmsKitManagementDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}