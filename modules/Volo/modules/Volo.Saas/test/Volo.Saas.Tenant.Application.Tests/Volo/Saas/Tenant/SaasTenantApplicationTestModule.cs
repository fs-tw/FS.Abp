using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Volo.Saas.Tenant
{
    [DependsOn(
        typeof(SaasTenantApplicationModule),
        typeof(SaasDomainTestModule)
        )]
    public class SaasTenantApplicationTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAlwaysAllowAuthorization();
        }
    }
}
