using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Printer.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(AbpValidationModule)
)]
[DependsOn(typeof(FS.Printer.PrinterDomainSharedModule))]
public class PrintingDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<PrintingDomainSharedModule>();
        });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Get<PrinterResource>()
                //.AddBaseTypes(typeof(AbpValidationResource))
                .AddVirtualJson("/Localization/Printing");
        });

        Configure<AbpExceptionLocalizationOptions>(options =>
        {
            options.MapCodeNamespace("Printing", typeof(PrinterResource));
        });
    }
}
