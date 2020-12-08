using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Abp.LeptonTheme.Management
{
    [DependsOn(
        typeof(LeptonThemeManagementApplicationContractsModule),
        typeof(AbpHttpClientModule)
        )]
    public class LeptonThemeManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "LeptonTheme";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(LeptonThemeManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
        
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
