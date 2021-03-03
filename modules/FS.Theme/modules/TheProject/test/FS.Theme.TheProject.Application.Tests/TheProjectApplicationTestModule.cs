using Volo.Abp.Modularity;

namespace FS.Theme.TheProject
{
    [DependsOn(
        typeof(TheProjectApplicationModule),
        typeof(TheProjectDomainTestModule)
        )]
    public class TheProjectApplicationTestModule : AbpModule
    {

    }
}
