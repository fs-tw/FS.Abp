using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(TheProjectApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    //[DependsOn(
    //    typeof(FS.Theme.ThemeHttpApiClientModule)
    //    )]
    public class TheProjectHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "TheProject";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(TheProjectApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
