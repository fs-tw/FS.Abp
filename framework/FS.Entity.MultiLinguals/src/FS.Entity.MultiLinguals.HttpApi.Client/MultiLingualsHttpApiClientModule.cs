using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Entity.MultiLinguals;

[DependsOn(
    typeof(MultiLingualsApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class MultiLingualsHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(MultiLingualsApplicationContractsModule).Assembly,
            MultiLingualsRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<MultiLingualsHttpApiClientModule>();
        });

    }
}
