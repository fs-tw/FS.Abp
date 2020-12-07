using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using Volo.Abp.LeptonTheme.Management.Localization;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(
        typeof(AbpLocalizationModule)
        )]
    public class LeptonThemeManagementDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<LeptonThemeManagementDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<LeptonThemeManagementResource>("en")
                    .AddBaseTypes(
                        typeof(AbpValidationResource)
                    ).AddVirtualJson("/Volo/Abp/LeptonTheme/Management/Localization/Resources/DomainShared");
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
