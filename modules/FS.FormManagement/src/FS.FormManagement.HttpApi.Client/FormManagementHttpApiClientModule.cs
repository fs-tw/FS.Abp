using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.FormManagement
{
    [DependsOn(
        typeof(FormManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class FormManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "FormManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(FormManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
