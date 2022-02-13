using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Entity.MultiLinguals.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Entity.MultiLinguals
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    [DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererCoreModule))]
    [DependsOn(typeof(FS.Entity.EntityFeatures.EntityFeaturesCoreModule))]
    public class MultiLingualsDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<MultiLingualsDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<MultiLingualsResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/MultiLinguals");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("MultiLinguals", typeof(MultiLingualsResource));
            });
        }
    }
}


