using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Printer.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Printer;

[DependsOn(
    typeof(AbpValidationModule)
)]
[DependsOn(typeof(FS.Abp.Npoi.Mapper.AbpNpoiMapperCoreModule))]
[DependsOn(typeof(FS.Abp.AutoFilterer.AbpAutoFiltererCoreModule))]
public class PrinterDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<PrinterDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<PrinterResource>("en")
                .AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Printer");
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("Printer", typeof(PrinterResource));
        });
    }
}
