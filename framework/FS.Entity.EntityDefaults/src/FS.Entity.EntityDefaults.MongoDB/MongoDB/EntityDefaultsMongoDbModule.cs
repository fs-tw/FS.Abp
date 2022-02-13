using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace FS.Entity.EntityDefaults.MongoDB;

[DependsOn(
    typeof(EntityDefaultsDomainModule),
    typeof(AbpMongoDbModule)
    )]
public class EntityDefaultsMongoDbModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddMongoDbContext<EntityDefaultsMongoDbContext>(options =>
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
        });
    }
}
