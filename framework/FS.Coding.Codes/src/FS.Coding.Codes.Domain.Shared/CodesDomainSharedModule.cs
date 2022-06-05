using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Coding.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Coding.Codes;

[DependsOn(typeof(FS.Coding.CodingDomainSharedModule))]
public class CodesDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<CodesDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<CodingResource>()
                //.AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Codes");
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("Codes", typeof(CodingResource));
        });
    }
}
