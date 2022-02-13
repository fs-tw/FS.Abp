using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace FS.Entity.MultiLinguals.MongoDB;

[DependsOn(
    typeof(MultiLingualsDomainModule),
    typeof(AbpMongoDbModule)
    )]
public class MultiLingualsMongoDbModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMongoDbContext<MultiLingualsMongoDbContext>(options =>
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
        });
    }
}
