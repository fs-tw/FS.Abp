using Volo.Abp.Modularity;

namespace FS.LineNotify
{
    [DependsOn(
        typeof(LineNotifyApplicationModule),
        typeof(LineNotifyDomainTestModule)
        )]
    public class LineNotifyApplicationTestModule : AbpModule
    {

    }
}
