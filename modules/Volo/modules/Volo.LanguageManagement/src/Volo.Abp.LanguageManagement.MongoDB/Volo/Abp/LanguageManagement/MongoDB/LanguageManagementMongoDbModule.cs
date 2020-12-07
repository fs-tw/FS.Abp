using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace Volo.Abp.LanguageManagement.MongoDB
{
    [DependsOn(
        typeof(LanguageManagementDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class LanguageManagementMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<LanguageManagementMongoDbContext>(options =>
            {
                options.AddRepository<Language, MongoLanguageRepository>();
                options.AddRepository<LanguageText, MongoLanguageTextRepository>();
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<LanguageManagementMongoDbModule>(context);
        }
    }
}
