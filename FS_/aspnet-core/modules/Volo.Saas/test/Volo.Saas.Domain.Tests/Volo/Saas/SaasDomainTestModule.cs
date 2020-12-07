using Volo.Saas.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo.Saas
{
    [DependsOn(
        typeof(SaasEntityFrameworkCoreTestModule)
        )]
    public class SaasDomainTestModule : AbpModule
    {
        
    }
}
