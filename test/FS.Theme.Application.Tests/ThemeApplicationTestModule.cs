using Volo.Abp.Modularity;

namespace FS.Theme
{
    [DependsOn(
        typeof(ThemeApplicationModule),
        typeof(ThemeDomainTestModule)
        )]
    public class ThemeApplicationTestModule : AbpModule
    {

    }
}
