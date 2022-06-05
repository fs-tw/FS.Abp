using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.PrinterManagement
{
    [DependsOn(
        typeof(PrinterManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class PrinterManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "PrinterManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(PrinterManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
