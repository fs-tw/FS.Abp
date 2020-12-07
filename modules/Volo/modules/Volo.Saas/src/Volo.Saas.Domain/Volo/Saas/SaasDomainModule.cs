using System.Collections.Generic;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.AutoMapper;
using Volo.Abp.Data;
using Volo.Abp.Domain;
using Volo.Abp.Domain.Entities.Events.Distributed;
using Volo.Saas.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Features;
using Volo.Abp.ObjectExtending;
using Volo.Abp.ObjectExtending.Modularity;
using Volo.Saas.Editions;
using Volo.Saas.Features;
using Volo.Saas.Tenants;
using Volo.Abp.Threading;

namespace Volo.Saas
{
    [DependsOn(
        typeof(AbpMultiTenancyModule),
        typeof(SaasDomainSharedModule),
        typeof(AbpDataModule),
        typeof(AbpDddDomainModule),
        typeof(AbpAutoMapperModule),
        typeof(AbpFeatureManagementDomainModule)
        )]
    public class SaasDomainModule : AbpModule
    {
        private static readonly OneTimeRunner OneTimeRunner = new OneTimeRunner();

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<FeatureManagementOptions>(options =>
            {
                options.ProviderPolicies[TenantFeatureValueProvider.ProviderName] = "Saas.Tenants.ManageFeatures";
                options.ProviderPolicies[EditionFeatureValueProvider.ProviderName] = "Saas.Editions.ManageFeatures";

                //Default - Edition - TenantEdition - Tenant
                options.Providers.InsertBefore(
                    r => r == typeof(TenantFeatureManagementProvider),
                    typeof(TenantEditionFeatureValueProvider)
                );
            });

            context.Services.AddAutoMapperObjectMapper<SaasDomainModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddProfile<SaasDomainMappingProfile>(validate: true);
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SaasDomainModule>();
            });

            Configure<AbpDistributedEntityEventOptions>(options =>
            {
                options.EtoMappings.Add<Edition, EditionEto>(typeof(SaasDomainModule));
                options.EtoMappings.Add<Tenant, TenantEto>(typeof(SaasDomainModule));
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources.Get<SaasResource>().AddVirtualJson("/Volo/Saas/Localization/Domain");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Saas", typeof(SaasResource));
            });
        }

        public override void PostConfigureServices(ServiceConfigurationContext context)
        {
            OneTimeRunner.Run(() =>
            {
                ModuleExtensionConfigurationHelper.ApplyEntityConfigurationToEntity(
                    SaasModuleExtensionConsts.ModuleName,
                    SaasModuleExtensionConsts.EntityNames.Tenant,
                    typeof(Tenant)
                );

                ModuleExtensionConfigurationHelper.ApplyEntityConfigurationToEntity(
                    SaasModuleExtensionConsts.ModuleName,
                    SaasModuleExtensionConsts.EntityNames.Edition,
                    typeof(Edition)
                );
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            //LicenseChecker.Check<SaasDomainModule>(context);
        }
    }
}
