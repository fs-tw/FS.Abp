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
        typeof(AbpValidationModule),
        typeof(FS.DynamicForm.DynamicFormDomainSharedModule)
    )]
    public class CmsDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<CmsDomainSharedModule>("FS.Cms");
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
