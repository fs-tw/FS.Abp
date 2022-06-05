using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Printer.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.PrinterManagement
{
    [DependsOn(typeof(FS.Printer.Printing.PrintingDomainSharedModule))]
    public class PrinterManagementDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<PrinterManagementDomainSharedModule>();
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<PrinterResource>()
                    //.AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/PrinterManagement");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("PrinterManagement", typeof(PrinterResource));
            });
        }
    }
}
