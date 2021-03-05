using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Cms.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;

namespace FS.Cms
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(
        typeof(FS.Abp.AbpDomainSharedModule)
        )]
    [DependsOn(typeof(FS.Abp.File.FileDomainSharedModule))]
    public class CmsDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<FS.Abp.File.Directories.DirectoryProviderOptions>(options =>
            {
                options.DirectoryProviders.AddOrReplace(
                    new Abp.File.Directories.DirectoryProviderDefinition(
                    "FS.Cms.Blogs", "Files/Blogs"
                    ));

                options.DirectoryProviders.AddOrReplace(
                    new Abp.File.Directories.DirectoryProviderDefinition(
                    "FS.Cms.Posts", "Files/Posts"
                    ));

            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CmsDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<CmsResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Cms");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Cms", typeof(CmsResource));
            });
        }
    }
}
