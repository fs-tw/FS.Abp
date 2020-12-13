using Volo.Abp;
using Volo.Abp.FeatureManagement;
using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Saas.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Saas
{
    [DependsOn(
        typeof(AbpLocalizationModule),
        typeof(AbpFeatureManagementDomainSharedModule),
        typeof(AbpValidationModule)
        )]
    public class SaasDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<SaasDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<SaasResource>("en")
                    .AddBaseTypes(
                        typeof(AbpValidationResource)
                    ).AddVirtualJson("/Volo/Saas/Localization/Resources/DomainShared");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Volo.Saas", typeof(SaasResource));
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
