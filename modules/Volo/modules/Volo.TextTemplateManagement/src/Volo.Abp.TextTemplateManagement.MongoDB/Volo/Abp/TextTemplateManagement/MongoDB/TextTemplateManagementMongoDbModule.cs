using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.MongoDB
{
    [DependsOn(
        typeof(TextTemplateManagementDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class TextTemplateManagementMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<TextTemplateManagementMongoDbContext>(options =>
            {
                options.AddRepository<TextTemplateContent, MongoDbTextTemplateContentRepository>();
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<TextTemplateManagementMongoDbModule>(context);
        }
    }
}
