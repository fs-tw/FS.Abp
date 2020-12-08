using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.FileManagement
{
    [DependsOn(
        typeof(FileManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class FileManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "FileManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(FileManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
