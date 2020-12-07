using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;
using Volo.Abp.LanguageManagement.MongoDB;
using Volo.Saas.MongoDB;
using Volo.Abp.TextTemplateManagement.MongoDB;

namespace FS.Abp.MongoDB
{
    [DependsOn(
        typeof(AbpDomainModule),
        typeof(AbpMongoDbModule)
        )]
    [DependsOn(typeof(LanguageManagementMongoDbModule))]
    [DependsOn(typeof(SaasMongoDbModule))]
    [DependsOn(typeof(TextTemplateManagementMongoDbModule))]
    public class AbpMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<AbpMongoDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
            });
        }
    }
}
