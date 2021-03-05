using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.File
{
    [DependsOn(
        typeof(FileApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class FileHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "File";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(FileApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
