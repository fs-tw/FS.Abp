using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Printer;

[DependsOn(
    typeof(PrinterApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class PrinterHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(PrinterApplicationContractsModule).Assembly,
            PrinterRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<PrinterHttpApiClientModule>();
        });

    }
}
