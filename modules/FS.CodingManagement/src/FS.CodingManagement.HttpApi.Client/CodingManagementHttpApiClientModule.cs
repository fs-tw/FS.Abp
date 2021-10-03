using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.CodingManagement
{
    [DependsOn(
        typeof(CodingManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class CodingManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "CodingManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(CodingManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
