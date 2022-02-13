using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Entity.EntityDefaults.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Entity.EntityDefaults
{
    [DependsOn(
     typeof(AbpValidationModule)
 )]
    public class EntityDefaultsDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<EntityDefaultsDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<EntityDefaultsResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/EntityDefaults");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("EntityDefaults", typeof(EntityDefaultsResource));
            });
        }
    }
}


