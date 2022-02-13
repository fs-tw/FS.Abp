using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Entity.EntityDefaults;

[DependsOn(
    typeof(EntityDefaultsApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class EntityDefaultsHttpApiClientModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(EntityDefaultsApplicationContractsModule).Assembly,
            EntityDefaultsRemoteServiceConsts.RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<EntityDefaultsHttpApiClientModule>();
        });

    }
}
