using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Theme.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Theme
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(
        typeof(FS.Abp.AbpDomainSharedModule)
        )]
    [DependsOn(typeof(FS.Abp.File.FileDomainSharedModule))]
    public class ThemeDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<FS.Abp.File.Directories.DirectoryProviderOptions>(options =>
            {
                options.DirectoryProviders.AddOrReplace(new Abp.File.Directories.DirectoryProviderDefinition(
                    "FS.Theme.Banners", "Files/Banners"
                    ));
                options.DirectoryProviders.AddOrReplace(new Abp.File.Directories.DirectoryProviderDefinition(
                   "FS.Theme.WebSiteDefinition", "Files/WebSiteDefinition"
                   ));
                options.DirectoryProviders.AddOrReplace(new Abp.File.Directories.DirectoryProviderDefinition(
                   "FS.Theme.Routers", "Files/Routers"
                   ));
            });

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<ThemeDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<ThemeResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Theme");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Theme", typeof(ThemeResource));
            });
        }
    }
}
