using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.EntityTypes
{
    [DependsOn(
        typeof(EntityTypesApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class EntityTypesHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "EntityTypes";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(EntityTypesApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
