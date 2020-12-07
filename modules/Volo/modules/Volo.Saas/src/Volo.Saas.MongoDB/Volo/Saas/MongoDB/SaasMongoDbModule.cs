using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.FeatureManagement;
using Volo.Abp.FeatureManagement.MongoDB;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;
using Volo.Saas.Editions;
using Volo.Saas.Tenants;

namespace Volo.Saas.MongoDB
{
    [DependsOn(
        typeof(SaasDomainModule),
        typeof(AbpMongoDbModule),
        typeof(AbpFeatureManagementMongoDbModule)
        )]
    public class SaasMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<SaasMongoDbContext>(options =>
            {
                options.AddRepository<Tenant, MongoTenantRepository>();
                options.AddRepository<Edition, MongoEditionRepository>();
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            LicenseChecker.Check<SaasMongoDbModule>(context);
        }
    }
}
