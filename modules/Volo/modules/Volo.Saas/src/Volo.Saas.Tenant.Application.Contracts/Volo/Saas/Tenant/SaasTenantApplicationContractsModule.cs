using Volo.Abp;
using Volo.Abp.Application;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas.Localization;

namespace Volo.Saas.Tenant
{
    [DependsOn(
        typeof(SaasDomainSharedModule),
        typeof(AbpDddApplicationModule)
    )]
    public class SaasTenantApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SaasTenantApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<SaasResource>()
                    .AddVirtualJson("/Volo/Saas/Tenant/Localization/ApplicationContracts");
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
