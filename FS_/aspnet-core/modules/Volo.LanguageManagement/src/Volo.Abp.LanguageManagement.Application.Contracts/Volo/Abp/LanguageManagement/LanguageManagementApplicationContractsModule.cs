using Volo.Abp.LanguageManagement.Localization;
using Volo.Abp.Application;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(
        typeof(LanguageManagementDomainSharedModule),
        typeof(AbpDddApplicationModule)
        )]
    public class LanguageManagementApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<LanguageManagementApplicationContractsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<LanguageManagementResource>()
                    .AddVirtualJson("/Volo/Abp/LanguageManagement/Localization/ApplicationContracts");
            });
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
