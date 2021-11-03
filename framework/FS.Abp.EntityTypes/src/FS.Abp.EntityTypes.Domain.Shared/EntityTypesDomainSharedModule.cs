using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.EntityTypes.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Reflection;
using System.ComponentModel;
using System.Linq;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    public class EntityTypesDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<EntityTypesDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<EntityTypesResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/EntityTypes");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("EntityTypes", typeof(EntityTypesResource));
            });
        }
    }
}
