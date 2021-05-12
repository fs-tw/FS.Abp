using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.CmsKitManagement
{
    [DependsOn(
        typeof(CmsKitManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class CmsKitManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "CmsKitManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(CmsKitManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
