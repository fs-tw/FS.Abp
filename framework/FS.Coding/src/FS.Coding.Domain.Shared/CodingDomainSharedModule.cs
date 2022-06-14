using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Coding.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Coding;

[DependsOn(
    typeof(AbpValidationModule)
)]
[DependsOn(typeof(FS.Abp.Data.AbpDataCoreModule))]
[DependsOn(typeof(FS.Abp.MediatR.AbpMediatRCoreModule))]
public class CodingDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<CodingDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<CodingResource>("en")
                //.AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Coding");
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("Coding", typeof(CodingResource));
        });
    }
}
