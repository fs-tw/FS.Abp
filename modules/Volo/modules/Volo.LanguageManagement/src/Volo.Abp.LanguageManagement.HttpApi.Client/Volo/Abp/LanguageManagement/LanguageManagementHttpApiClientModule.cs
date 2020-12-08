using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Abp.LanguageManagement
{
    [DependsOn(
        typeof(LanguageManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class LanguageManagementHttpApiClientModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(LanguageManagementApplicationContractsModule).Assembly,
                LanguageManagementRemoteServiceConsts.RemoteServiceName
            );
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
