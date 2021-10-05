using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.EntityFrameworkCore.DependencyInjection;
using FS.CmsKitManagement.EntityType;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(CmsKitManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(typeof(EasyAbp.Abp.Trees.EntityFrameworkCore.AbpTreesEntityFrameworkCoreModule))]
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
                options.AddDefaultTreeRepositories();
                options.AddDefaultRepositories(true);
            });

            context.Services.AddTransient(typeof(IEntityTypeStore<,>), typeof(EntityTypeStore<,>));
        }
    }
}