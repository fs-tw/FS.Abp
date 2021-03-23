using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.Authentication
{
    [DependsOn(
        typeof(AuthenticationApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class AuthenticationHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Authentication";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(AuthenticationApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
