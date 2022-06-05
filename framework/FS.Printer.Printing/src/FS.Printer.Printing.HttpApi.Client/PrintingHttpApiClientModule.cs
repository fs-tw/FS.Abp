using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Printer.Printing;

[DependsOn(
    typeof(PrintingApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class PrintingHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(PrintingApplicationContractsModule).Assembly,
            PrintingRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<PrintingHttpApiClientModule>();
        });

    }
}
