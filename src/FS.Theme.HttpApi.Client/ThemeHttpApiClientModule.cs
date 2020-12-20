using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class ThemeHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Theme";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(ThemeApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
