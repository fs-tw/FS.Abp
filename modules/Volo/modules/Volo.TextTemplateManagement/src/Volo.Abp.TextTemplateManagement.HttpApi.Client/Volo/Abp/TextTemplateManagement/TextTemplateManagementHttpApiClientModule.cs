using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace Volo.Abp.TextTemplateManagement
{
    [DependsOn(
        typeof(TextTemplateManagementApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class TextTemplateManagementHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "TextTemplateManagement";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(TextTemplateManagementApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
        }
    }
}
