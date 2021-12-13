using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.CmsKitManagement.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.CmsKitManagement
{
    [DependsOn(typeof(FS.Abp.Npoi.Mapper.AbpNpoiMapperModule))]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainSharedModule))]
    [DependsOn(typeof(Volo.CmsKit.CmsKitDomainSharedModule))]
    public class CmsKitManagementDomainSharedModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            CmsKitManagementGlobalFeatureConfigurator.Configure();
            CmsKitManagementModuleExtensionConfigurator.Configure();
        }
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CmsKitManagementDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<CmsKitManagementResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/CmsKitManagement");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("CmsKitManagement", typeof(CmsKitManagementResource));
            });
        }
    }
}
