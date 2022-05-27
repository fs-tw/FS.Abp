using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.SyncTable;

[DependsOn(
    typeof(SyncTableApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class SyncTableHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(SyncTableApplicationContractsModule).Assembly,
            SyncTableRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<SyncTableHttpApiClientModule>();
        });

    }
}
