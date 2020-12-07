using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;
using Volo.Abp.TextTemplateManagement.TextTemplates;

namespace Volo.Abp.TextTemplateManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(TextTemplateManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class TextTemplateManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<TextTemplateManagementDbContext>(options =>
            {
                options.AddRepository<TextTemplateContent, EfCoreTextTemplateContentRepository>();
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<TextTemplateManagementEntityFrameworkCoreModule>(context);
        }
    }
}