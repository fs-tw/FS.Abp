using Volo.Abp.IdentityServer.ApiResource.Dtos;
using Volo.Abp.IdentityServer.Client.Dtos;
using Volo.Abp.IdentityServer.IdentityResource.Dtos;
using Volo.Abp.IdentityServer.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Validation.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Threading;

namespace Volo.Abp.IdentityServer
{
    [DependsOn(typeof(AbpIdentityServerDomainSharedModule))]
    public class AbpIdentityServerApplicationContractsModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpIdentityServerApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<AbpIdentityServerResource>()
                    .AddBaseTypes(
                        typeof(AbpValidationResource)
                    )
                    .AddVirtualJson("Volo/Abp/IdentityServer/Localization/Resources/IdentityServer/ApplicationContracts");
            });
        }

        public override void PostConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityServerModuleExtensionConsts.ModuleName,
                        IdentityServerModuleExtensionConsts.EntityNames.Client,
                        getApiTypes: new[] { typeof(ClientWithDetailsDto) },
                        createApiTypes: new[] { typeof(CreateClientDto) },
                        updateApiTypes: new[] { typeof(UpdateClientDto) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityServerModuleExtensionConsts.ModuleName,
                        IdentityServerModuleExtensionConsts.EntityNames.IdentityResource,
                        getApiTypes: new[] { typeof(IdentityResourceWithDetailsDto) },
                        createApiTypes: new[] { typeof(CreateIdentityResourceDto) },
                        updateApiTypes: new[] { typeof(UpdateIdentityResourceDto) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityServerModuleExtensionConsts.ModuleName,
                        IdentityServerModuleExtensionConsts.EntityNames.ApiResource,
                        getApiTypes: new[] { typeof(ApiResourceWithDetailsDto) },
                        createApiTypes: new[] { typeof(CreateApiResourceDto) },
                        updateApiTypes: new[] { typeof(UpdateApiResourceDto) }
                    );
            });
        }


        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
