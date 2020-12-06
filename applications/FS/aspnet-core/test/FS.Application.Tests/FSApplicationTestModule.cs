using Volo.Abp.Modularity;

namespace FS
{
    [DependsOn(
        typeof(FSApplicationModule),
        typeof(FSDomainTestModule)
        )]
    public class FSApplicationTestModule : AbpModule
    {

    }
}