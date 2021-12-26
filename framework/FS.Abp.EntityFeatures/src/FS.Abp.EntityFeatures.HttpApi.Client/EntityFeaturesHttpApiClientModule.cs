using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.EntityFeatures
{
    [DependsOn(
        typeof(EntityFeaturesApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class EntityFeaturesHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(EntityFeaturesApplicationContractsModule).Assembly,
                EntityFeaturesRemoteServiceConsts.RemoteServiceName
            );

            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<EntityFeaturesHttpApiClientModule>();
            });

        }
    }
}
