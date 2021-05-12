using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace FS.CmsKitManagement.MongoDB
{
    [DependsOn(
        typeof(CmsKitManagementDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class CmsKitManagementMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<CmsKitManagementMongoDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
            });
        }
    }
}
