using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.Identity;
using Volo.Abp.AuditLogging;
using Volo.Abp.IdentityServer;
using Volo.Abp.LanguageManagement;
using Volo.Saas.Host;
using Volo.Saas.Tenant;
using Volo.Abp.TextTemplateManagement;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    [DependsOn(typeof(AbpIdentityHttpApiClientModule))]
    [DependsOn(typeof(AbpAuditLoggingHttpApiClientModule))]
    [DependsOn(typeof(AbpIdentityServerHttpApiClientModule))]
    [DependsOn(typeof(LanguageManagementHttpApiClientModule))]
    [DependsOn(typeof(SaasHostHttpApiClientModule))]
    [DependsOn(typeof(TextTemplateManagementHttpApiClientModule))]
    public class AbpHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Abp";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(AbpApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}
