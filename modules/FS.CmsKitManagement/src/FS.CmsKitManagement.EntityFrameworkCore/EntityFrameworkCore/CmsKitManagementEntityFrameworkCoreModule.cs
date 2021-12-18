using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.EntityFrameworkCore.DependencyInjection;

namespace FS.CmsKitManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(CmsKitManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    [DependsOn(typeof(Volo.CmsKit.EntityFrameworkCore.CmsKitEntityFrameworkCoreModule))]
    public class CmsKitManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            CmsKitManagementEfCoreEntityExtensionMappings.Configure();
        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<CmsKitManagementDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
                //options.AddDefaultEntityTypeRepositories();
                options.AddDefaultRepositories(true);
            });
        }
    }
}