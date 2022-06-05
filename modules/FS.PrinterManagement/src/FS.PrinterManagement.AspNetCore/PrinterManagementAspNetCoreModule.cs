using Localization.Resources.AbpUi;
using FS.PrinterManagement.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(FS.PrinterManagement.PrinterManagementApplicationModule),
        typeof(FS.PrinterManagement.PrinterManagementHttpApiModule),
        typeof(FS.PrinterManagement.EntityFrameworkCore.PrinterManagementEntityFrameworkCoreModule))]
    public class PrinterManagementAspNetCoreModule : AbpModule
    {

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(PrinterManagementApplicationModule).Assembly, c =>
                 {
                     c.RootPath = FS.PrinterManagement.PrinterManagementApplicationContractsConst.RootPath;
                     c.RemoteServiceName = FS.PrinterManagement.PrinterManagementApplicationContractsConst.RemoteServiceName;
                 });
            });
        }
    }
}
