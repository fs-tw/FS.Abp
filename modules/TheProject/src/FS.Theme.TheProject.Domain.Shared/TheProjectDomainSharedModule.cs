using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Theme.TheProject.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(
        typeof(FS.Theme.ThemeDomainSharedModule)
        )]
    public class TheProjectDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<TheProjectDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<TheProjectResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/TheProject");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("TheProject", typeof(TheProjectResource));
            });
        }
    }
}
