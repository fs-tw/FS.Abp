using Volo.Abp;
using Volo.Abp.Application;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Saas.Host.Dtos;
using Volo.Saas.Localization;
using Volo.Abp.Threading;

namespace Volo.Saas.Host
{
    [DependsOn(
        typeof(SaasDomainSharedModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpFeatureManagementApplicationContractsModule)
        )]
    public class SaasHostApplicationContractsModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SaasHostApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<SaasResource>()
                    .AddVirtualJson("/Volo/Saas/Host/Localization/ApplicationContracts");
            });
        }

        public override void PostConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        SaasModuleExtensionConsts.ModuleName,
                        SaasModuleExtensionConsts.EntityNames.Tenant,
                        getApiTypes: new[] { typeof(SaasTenantDto) },
                        createApiTypes: new[] { typeof(SaasTenantCreateDto) },
                        updateApiTypes: new[] { typeof(SaasTenantUpdateDto) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        SaasModuleExtensionConsts.ModuleName,
                        SaasModuleExtensionConsts.EntityNames.Edition,
                        getApiTypes: new[] { typeof(EditionDto) },
                        createApiTypes: new[] { typeof(EditionCreateDto) },
                        updateApiTypes: new[] { typeof(EditionUpdateDto) }
                    );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
