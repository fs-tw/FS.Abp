using Volo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace Volo
{
    [DependsOn(
        typeof(VoloEntityFrameworkCoreTestModule)
        )]
    public class VoloDomainTestModule : AbpModule
    {

    }
}