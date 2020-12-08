using Volo.Abp.Application;
using Volo.Abp.AuditLogging.Localization;
using Volo.Abp.Authorization;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.AuditLogging
{
    [DependsOn(
        typeof(AbpDddApplicationModule),
        typeof(AbpAuthorizationModule),
        typeof(AbpAuditLoggingDomainSharedModule))]
    public class AbpAuditLoggingApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpAuditLoggingApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AuditLoggingResource>()
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Volo/Abp/AuditLogging/Localization/ApplicationContracts");
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
