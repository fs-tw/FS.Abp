using Volo.Abp.Modularity;

namespace FS.Abp
{
    [DependsOn(
        typeof(AbpApplicationModule),
        typeof(AbpDomainTestModule)
        )]
    public class AbpApplicationTestModule : AbpModule
    {

    }
}
