using Volo.Abp;
using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using Volo.FileManagement.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.FileManagement
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    public class FileManagementDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<FileManagementDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<FileManagementResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("Volo/FileManagement/Localization/FileManagement");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("FileManagement", typeof(FileManagementResource));
            });
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
