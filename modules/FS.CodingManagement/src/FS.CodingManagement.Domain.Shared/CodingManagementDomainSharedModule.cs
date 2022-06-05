using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Coding.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.CodingManagement
{
    [DependsOn(typeof(FS.Coding.Codes.CodesDomainSharedModule))]
    [DependsOn(typeof(EasyAbp.Abp.Trees.AbpTreesDomainSharedModule))]
    public class CodingManagementDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CodingManagementDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<CodingResource>()
                    //.AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/CodingManagement");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("CodingManagement", typeof(CodingResource));
            });
        }
    }
}
