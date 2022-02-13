using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Entity.EntityFeatures.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Entity.EntityFeatures;

[DependsOn(
    typeof(AbpValidationModule)
)]
public class EntityFeaturesDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<EntityFeaturesDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<EntityFeaturesResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/EntityFeatures");
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("EntityFeatures", typeof(EntityFeaturesResource));
        });
    }
}
