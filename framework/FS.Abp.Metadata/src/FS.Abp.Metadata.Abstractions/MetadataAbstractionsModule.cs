using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.Metadata.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;
using System;
using System.Linq;
using Volo.Abp.Reflection;
using System.ComponentModel;

namespace FS.Abp.Metadata
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    public class MetadataAbstractionsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<MetadataAbstractionsModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<MetadataResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Metadata");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Metadata", typeof(MetadataResource));
            });
        }
    }
}
