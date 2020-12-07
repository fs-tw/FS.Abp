using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.LanguageManagement;
using Volo.Saas;
using Volo.Abp.TextTemplateManagement;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(typeof(LanguageManagementDomainSharedModule))]
    [DependsOn(typeof(SaasDomainSharedModule))]
    [DependsOn(typeof(TextTemplateManagementDomainSharedModule))]
    public class AbpDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<AbpDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<AbpResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Abp");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Abp", typeof(AbpResource));
            });
        }
    }
}
