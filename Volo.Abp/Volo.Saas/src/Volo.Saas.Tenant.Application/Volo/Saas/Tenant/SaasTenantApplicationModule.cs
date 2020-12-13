using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;

namespace Volo.Saas.Tenant
{
    [DependsOn(
        typeof(SaasDomainModule),
        typeof(SaasTenantApplicationContractsModule),
        typeof(AbpAutoMapperModule)
    )]
    public class SaasTenantApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<SaasTenantApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
               // options.AddProfile<SaasTenantApplicationAutoMapperProfile>(validate: true);
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<SaasTenantApplicationModule>(context);
        }
    }
}
