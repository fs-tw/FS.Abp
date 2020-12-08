using Volo.Abp.Application;
using Volo.Abp.Authorization;
using Volo.Abp.Identity.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Users;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Abp.Validation.Localization;
using Volo.Abp.Threading;

namespace Volo.Abp.Identity
{
    [DependsOn(
        typeof(AbpIdentityDomainSharedModule),
        typeof(AbpUsersAbstractionModule),
        typeof(AbpAuthorizationModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpPermissionManagementApplicationContractsModule)
        )]
    public class AbpIdentityApplicationContractsModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpIdentityApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<IdentityResource>().AddBaseTypes(
                        typeof(AbpValidationResource)
                    )
                    .AddVirtualJson("/Volo/Abp/Identity/Localization/ApplicationContracts");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Volo.Abp.Identity", typeof(IdentityResource));
            });
        }

        public override void PostConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.User,
                        getApiTypes: new[] { typeof(IdentityUserDto) },
                        createApiTypes: new[] { typeof(IdentityUserCreateDto) },
                        updateApiTypes: new[] { typeof(IdentityUserUpdateDto) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.Role,
                        getApiTypes: new[] { typeof(IdentityRoleDto) },
                        createApiTypes: new[] { typeof(IdentityRoleCreateDto) },
                        updateApiTypes: new[] { typeof(IdentityRoleUpdateDto) }
                    );

                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.ClaimType,
                        getApiTypes: new[] { typeof(ClaimTypeDto) },
                        createApiTypes: new[] { typeof(CreateClaimTypeDto) },
                        updateApiTypes: new[] { typeof(UpdateClaimTypeDto) }
                    );
                
                ModuleExtensionConfigurationHelper
                    .ApplyEntityConfigurationToApi(
                        IdentityModuleExtensionConsts.ModuleName,
                        IdentityModuleExtensionConsts.EntityNames.OrganizationUnit,
                        getApiTypes: new[] { typeof(OrganizationUnitDto), typeof(OrganizationUnitWithDetailsDto) },
                        createApiTypes: new[] { typeof(OrganizationUnitCreateDto) },
                        updateApiTypes: new[] { typeof(OrganizationUnitUpdateDto) }
                    );
            });
        }
    }
}