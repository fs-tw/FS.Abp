using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.Settings
{
    [DependsOn(
        typeof(SettingsApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class SettingsHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Settings";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(SettingsApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
