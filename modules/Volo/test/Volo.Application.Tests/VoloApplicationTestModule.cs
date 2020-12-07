using Volo.Abp.Modularity;

namespace Volo
{
    [DependsOn(
        typeof(VoloApplicationModule),
        typeof(VoloDomainTestModule)
        )]
    public class VoloApplicationTestModule : AbpModule
    {

    }
}