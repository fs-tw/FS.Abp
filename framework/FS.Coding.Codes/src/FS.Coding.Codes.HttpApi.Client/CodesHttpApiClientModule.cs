using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Coding.Codes;

[DependsOn(
    typeof(CodesApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class CodesHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(CodesApplicationContractsModule).Assembly,
            CodesRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<CodesHttpApiClientModule>();
        });

    }
}
