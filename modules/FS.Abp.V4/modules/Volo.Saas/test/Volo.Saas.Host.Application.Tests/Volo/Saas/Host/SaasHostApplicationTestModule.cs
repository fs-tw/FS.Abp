using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;

namespace Volo.Saas.Host
{
    [DependsOn(
        typeof(SaasHostApplicationModule),
        typeof(SaasDomainTestModule)
        )]
    public class SaasHostApplicationTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAlwaysAllowAuthorization();
        }
    }
}
