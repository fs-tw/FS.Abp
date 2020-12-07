using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Abp.LanguageManagement.EntityFrameworkCore
{
    [DependsOn(
        typeof(LanguageManagementDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class LanguageManagementEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<LanguageManagementDbContext>(options =>
            {
                  options.AddRepository<Language, EfCoreLanguageRepository>();
                  options.AddRepository<LanguageText, EfCoreLanguageTextRepository>();
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<LanguageManagementEntityFrameworkCoreModule>(context);
        }
    }
}